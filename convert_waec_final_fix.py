#!/usr/bin/env python3
"""
Complete fix for WAEC question files - addresses all issues:
1. Correct image paths (NO X format without period)
2. No duplicate answer text
3. Proper more info content extraction
4. No typewriter animation causing vibration
"""

from bs4 import BeautifulSoup
import re
import os
import subprocess

def get_template_structure():
    """Read template from test.html"""
    template_file = "/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/test.html"
    with open(template_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove the typewriter animation that causes vibration
    # Replace with simple show/hide
    content = re.sub(
        r'function displayAnswer\(element\).*?}\s*}\s*typeWriter\(\);',
        '''function displayAnswer(element) {
                var container = $(element).siblings('.container');
                var answer = container.children('.answer');

                answer.removeClass('hidden');
                container.removeClass('hidden');
                container.children('#subject-button').removeClass('hidden');''',
        content,
        flags=re.DOTALL
    )

    content = re.sub(
        r'function displayMoreContent\(element\).*?}\s*}\s*typeWriter\(\);',
        '''function displayMoreContent(element) {
                var moreContent = $(element).siblings('#more-content');
                moreContent.removeClass('hidden');''',
        content,
        flags=re.DOTALL
    )

    return content


def extract_questions_from_old_html(filepath, subject):
    """Extract questions from old HTML format"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')
    questions = []
    seen_numbers = set()

    all_divs = soup.find_all('div', class_='question')

    for q_div in all_divs:
        # Extract question number
        q_num_elem = q_div.find('div', class_='question-number')
        if not q_num_elem:
            continue

        q_num_text = q_num_elem.get_text(strip=True)

        # Skip instruction headers
        if 'Each question is followed by four options' in q_num_text:
            continue

        # Extract just the number
        num_match = re.search(r'^(\d+)\.', q_num_text)
        if not num_match:
            continue

        q_num = num_match.group(1)

        # Skip duplicates
        if q_num in seen_numbers:
            continue

        seen_numbers.add(q_num)

        # Extract question text
        q_text = ''
        for sibling in q_num_elem.next_siblings:
            if isinstance(sibling, str):
                text = sibling.strip()
                if text and not text.startswith('<'):
                    q_text = text
                    break
            elif sibling.name == 'p':
                q_text = sibling.get_text(strip=True)
                break

        if not q_text:
            options_div = q_div.find('div', class_='options')
            if options_div:
                for elem in q_div.children:
                    if elem == options_div:
                        break
                    if hasattr(elem, 'get_text'):
                        text = elem.get_text(strip=True)
                        if text and not text.startswith(q_num + '.') and 'question-number' not in str(elem):
                            q_text = text
                            break

        if not q_text or len(q_text) < 5:
            continue

        # Clean up question text
        q_text = re.sub(r'^[A-D]\..*', '', q_text, flags=re.MULTILINE)
        q_text = re.sub(r'Check Answer.*', '', q_text, flags=re.DOTALL)

        # Remove options if they got mixed in
        match = re.match(r'(.*?\?[^A-D]*?)(?=[A-D]\.\s+\S)', q_text, re.DOTALL)
        if match:
            q_text = match.group(1).strip()

        # Extract options
        options_div = q_div.find('div', class_='options')
        if not options_div:
            continue

        options = []
        option_divs = options_div.find_all('div', class_='option', recursive=False)

        for opt_div in option_divs:
            opt_text = opt_div.get_text(strip=True)
            is_correct = opt_div.get('data-correct', 'false') == 'true'

            opt_match = re.match(r'^([A-D])\.?\s*(.*)', opt_text)
            if opt_match:
                opt_letter = opt_match.group(1)
                opt_content = opt_match.group(2).strip()
            else:
                continue

            options.append({
                'letter': opt_letter,
                'text': opt_content,
                'correct': is_correct
            })

        if len(options) != 4:
            continue

        # Extract CLEAN answer explanation (avoid duplicates)
        answer_explanation = ''
        answer_div = q_div.find('div', class_='answer')
        if answer_div:
            # Get the text content
            for img in answer_div.find_all('img'):
                img.decompose()

            answer_text = answer_div.get_text(strip=True)

            # Remove ALL variations of "The correct answer is..." - be aggressive
            answer_text = re.sub(r'The correct answer is Option [A-D]\.?\s*[^.]*\.+\s*', '', answer_text, flags=re.IGNORECASE)
            answer_text = re.sub(r'The correct answer is [^.]+\.+\s*', '', answer_text, flags=re.IGNORECASE)
            answer_text = re.sub(r'More\.\.\?.*', '', answer_text, flags=re.DOTALL)

            # Clean up any remaining text
            answer_text = answer_text.strip()

            # Only use if it's substantial and doesn't just repeat the answer
            if answer_text and len(answer_text) > 15:
                answer_explanation = answer_text[:500]

        # Extract and CLEAN more content
        more_content = {}
        more_content_div = q_div.find('div', id='more-content')
        if more_content_div:
            # Remove images
            for img in more_content_div.find_all('img'):
                img.decompose()

            full_text = more_content_div.get_text(strip=True)

            # Parse different option explanations
            # Pattern: "C. text... On the other hand, A. text... Also, B. text... And lastly, D. text..."

            # Extract correct option explanation (usually first)
            correct_letter = next((opt['letter'] for opt in options if opt['correct']), 'A')

            # Try to find sections for each option
            option_explanations = {}

            # Split by common separators
            parts = re.split(r'(?:On the other hand,?|Also,?|And lastly,?)', full_text)

            for part in parts:
                part = part.strip()
                if not part:
                    continue

                # Check if it starts with an option letter
                for opt in options:
                    pattern = rf'^{opt["letter"]}\.?\s*{re.escape(opt["text"][:20])}'
                    if re.search(pattern, part, re.IGNORECASE):
                        # Extract explanation after the option text
                        expl = re.sub(rf'^{opt["letter"]}\.?\s*{re.escape(opt["text"])}\s*-?\s*', '', part)
                        if expl:
                            option_explanations[opt['letter']] = expl[:300]
                        break

                    # Alternative: just starts with letter
                    if part.startswith(f"{opt['letter']}."):
                        expl = part[len(f"{opt['letter']}."):].strip()
                        expl = re.sub(rf'^{re.escape(opt["text"])}\s*-?\s*', '', expl)
                        if expl and len(expl) > 10:
                            option_explanations[opt['letter']] = expl[:300]
                        break

            more_content = option_explanations

        questions.append({
            'number': q_num,
            'text': q_text,
            'options': options,
            'answer_explanation': answer_explanation,
            'more_content': more_content
        })

    return questions


def generate_question_html(q_data):
    """Generate HTML for a single question"""
    q_num = q_data['number']
    q_text = q_data['text']
    options = q_data['options']

    # Find correct option
    correct_option = next((opt for opt in options if opt['correct']), options[0])
    correct_letter = correct_option['letter']

    html = f'''
                <div class="question" id="question-{q_num}">
                    <div class="question-number"><strong>{q_num}.</strong></div>
                    <div class="question-text">{q_text}</div>
                    <div class="options">'''

    # Generate options
    for opt in options:
        opt_letter = opt['letter']
        opt_text = opt['text']
        is_correct = 'true' if opt['correct'] else 'false'

        html += f'''
                        <div class="option" data-correct="{is_correct}" data-option-id="q{q_num}-opt{opt_letter}">
                            <span class="option-label">{opt_letter}</span>
                            <span>{opt_text}</span>
                        </div>'''

    # Answer explanation - NO DUPLICATES
    answer_intro = f"<strong>The correct answer is Option {correct_letter}: {correct_option['text']}.</strong>"

    if q_data['answer_explanation']:
        answer_body = f"<p>{q_data['answer_explanation']}</p>"
    else:
        answer_body = ""

    html += f'''
                    </div>
                    <button class="check-answer button hidden">Check Answer</button>
                    <div class="container hidden">
                        <div class="answer hidden">
                            {answer_intro}
                            {answer_body}
                            <div class="image-wrapper">
                                <img src="../IMG/NO {q_num}/OPTION {correct_letter}.png" style="width: 100%; height: auto;" alt="Option {correct_letter}" class="question-image">
                            </div>
                        </div>'''

    # Wrong feedback for each incorrect option
    for opt in options:
        if not opt['correct']:
            opt_letter = opt['letter']

            # Use specific explanation if available
            if q_data['more_content'] and opt_letter in q_data['more_content']:
                explanation = q_data['more_content'][opt_letter]
            else:
                explanation = f"This is not the correct answer. The correct answer is Option {correct_letter}."

            html += f'''
                        <div id="wrong-feedback-q{q_num}-opt{opt_letter}" class="wrong-feedback hidden">
                            <div class="wrong-feedback-title">Why "{opt['text'][:60]}{'...' if len(opt['text']) > 60 else ''}" is incorrect:</div>
                            <p>{explanation}</p>
                            <div class="image-wrapper">
                                <img src="../IMG/NO {q_num}/OPTION {opt_letter}.png" alt="Option {opt_letter}" class="question-image">
                            </div>
                        </div>'''

    # More content section
    more_html = "<h3>More About This Topic</h3>"

    if q_data['more_content']:
        for opt_letter in ['A', 'B', 'C', 'D']:
            opt = next((o for o in options if o['letter'] == opt_letter), None)
            if opt and opt_letter in q_data['more_content']:
                status = "Correct" if opt['correct'] else "Incorrect"
                more_html += f"<p><strong>Option {opt_letter} ({status}):</strong> {opt['text']}</p>"
                more_html += f"<p>{q_data['more_content'][opt_letter]}</p>"
    else:
        more_html += "<p>Review the course material to better understand this concept and the distinctions between the different options.</p>"

    html += f'''
                        <button id="subject-button" class="button hidden">Learn More</button>
                        <div id="more-content" class="hidden">
                            {more_html}
                        </div>
                    </div>
                </div>
'''

    return html


def convert_file(input_file, output_file, subject, year):
    """Convert file to new format"""
    print(f"\nConverting {os.path.basename(input_file)}...")

    # Get template
    template_content = get_template_structure()

    # Extract questions
    questions = extract_questions_from_old_html(input_file, subject)

    print(f"  Extracted {len(questions)} valid questions")

    # Parse template
    soup = BeautifulSoup(template_content, 'html.parser')

    # Update title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = f"DECIPHER-ACADEMY - {subject} {year} Exam Practice"

    # Update progress text
    progress_elem = soup.find('span', id='progressText')
    if progress_elem:
        progress_elem.string = f"Progress: 0/{len(questions)}"

    # Update score display
    score_display = soup.find('div', class_='score-display')
    if score_display:
        score_display.string = f"0/{len(questions) * 5}"

    # Clear quiz div and add questions
    quiz_div = soup.find('div', class_='quiz')
    if quiz_div:
        quiz_div.clear()
        for q in questions:
            question_html = generate_question_html(q)
            quiz_div.append(BeautifulSoup(question_html, 'html.parser'))

    # Update totalQuestions in script
    script_tag = soup.find('script', string=re.compile(r'let totalQuestions'))
    if script_tag:
        script_text = str(script_tag.string)
        script_text = re.sub(
            r'let totalQuestions = \d+;',
            f'let totalQuestions = {len(questions)};',
            script_text
        )
        script_tag.string = script_text

    # Write file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(str(soup.prettify()))

    print(f"  ✓ Converted successfully")
    return len(questions)


# File mappings
FILES_TO_CONVERT = [
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/2023objbio.html', 'subject': 'Biology', 'year': '2023'},
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2021/QUESTIONS/chem2021obj.html', 'subject': 'Chemistry', 'year': '2021'},
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2022/QUESTIONS/2022chemistryobjquestions.html', 'subject': 'Chemistry', 'year': '2022'},
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2023/QUESTIONS/chemistryobj2023.html', 'subject': 'Chemistry', 'year': '2023'},
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2021/QUESTIONS/2021physicsobj.html', 'subject': 'Physics', 'year': '2021'},
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2022/QUESTIONS/2022physicsobjquestions.html', 'subject': 'Physics', 'year': '2022'},
    {'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2023/QUESTIONS/2023physicsobj.html', 'subject': 'Physics', 'year': '2023'},
]


if __name__ == '__main__':
    print("=" * 70)
    print("FINAL FIX: Converting WAEC question files")
    print("=" * 70)

    # Restore original files
    print("\nRestoring original files from git...")
    for file_info in FILES_TO_CONVERT:
        filepath = file_info['input']
        subprocess.run(['git', 'checkout', 'HEAD~1', '--', filepath], cwd='/home/user/Decipher-acad')
        print(f"  ✓ Restored {os.path.basename(filepath)}")

    print("\n" + "=" * 70)
    print("Converting files with fixes:")
    print("  - Correct image paths (NO. X format)")
    print("  - No duplicate answer text")
    print("  - Proper explanations")
    print("  - No typewriter animation")
    print("=" * 70)

    total = 0
    for file_info in FILES_TO_CONVERT:
        try:
            count = convert_file(file_info['input'], file_info['input'], file_info['subject'], file_info['year'])
            total += count
        except Exception as e:
            print(f"  ✗ ERROR: {e}")
            import traceback
            traceback.print_exc()

    print("\n" + "=" * 70)
    print(f"✓ Complete! Converted {total} questions total")
    print("=" * 70)
