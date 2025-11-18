#!/usr/bin/env python3
"""
Improved script to convert old WAEC question files to the new template format
"""

from bs4 import BeautifulSoup
import re
import os

def get_template_structure():
    """Read and extract template components from test.html"""
    template_file = "/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/test.html"
    with open(template_file, 'r', encoding='utf-8') as f:
        template_content = f.read()

    return template_content


def extract_questions_from_old_html(filepath):
    """Extract questions from old HTML format with improved parsing"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')
    questions = []
    seen_numbers = set()

    # Find all question divs - need to be more selective
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
            print(f"  Skipping duplicate question {q_num}")
            continue

        seen_numbers.add(q_num)

        # Extract question text - look for the p tag or next text after question-number
        q_text = ''

        # Try to find p tag with question text
        for sibling in q_num_elem.next_siblings:
            if isinstance(sibling, str):
                text = sibling.strip()
                if text and not text.startswith('<'):
                    q_text = text
                    break
            elif sibling.name == 'p':
                q_text = sibling.get_text(strip=True)
                break

        # Alternative: get text before options div
        if not q_text:
            options_div = q_div.find('div', class_='options')
            if options_div:
                # Get all text before options
                for elem in q_div.children:
                    if elem == options_div:
                        break
                    if hasattr(elem, 'get_text'):
                        text = elem.get_text(strip=True)
                        if text and not text.startswith(q_num + '.') and 'question-number' not in str(elem):
                            q_text = text
                            break

        if not q_text or len(q_text) < 5:
            print(f"  Warning: Could not extract question text for question {q_num}, skipping")
            continue

        # Clean up question text - remove options if they got mixed in
        q_text = re.sub(r'^[A-D]\..*', '', q_text, flags=re.MULTILINE)
        q_text = re.sub(r'Check Answer.*', '', q_text, flags=re.DOTALL)

        # If question text is too long, it might have absorbed the answer
        if len(q_text) > 500:
            # Try to find where options start
            match = re.search(r'([A-D]\.)', q_text)
            if match:
                q_text = q_text[:match.start()].strip()

        # Extract options
        options_div = q_div.find('div', class_='options')
        if not options_div:
            print(f"  Warning: No options found for question {q_num}, skipping")
            continue

        options = []
        option_divs = options_div.find_all('div', class_='option', recursive=False)

        for opt_div in option_divs:
            opt_text = opt_div.get_text(strip=True)
            is_correct = opt_div.get('data-correct', 'false') == 'true'

            # Extract option letter and text
            opt_match = re.match(r'^([A-D])\.?\s*(.*)', opt_text)
            if opt_match:
                opt_letter = opt_match.group(1)
                opt_content = opt_match.group(2).strip()
            else:
                print(f"  Warning: Could not parse option text: {opt_text[:50]}")
                continue

            options.append({
                'letter': opt_letter,
                'text': opt_content,
                'correct': is_correct
            })

        if len(options) != 4:
            print(f"  Warning: Question {q_num} has {len(options)} options instead of 4, skipping")
            continue

        # Extract answer explanation
        answer_div = q_div.find('div', class_='answer')
        answer_text = ''
        if answer_div:
            # Get clean answer text without images and buttons
            answer_clone = answer_div
            # Remove images
            for img in answer_clone.find_all('img'):
                img.decompose()
            answer_text = answer_clone.get_text(strip=True)
            # Clean up
            answer_text = re.sub(r'More\.\.\?.*', '', answer_text, flags=re.DOTALL)
            answer_text = answer_text[:500] if len(answer_text) > 500 else answer_text

        # Extract more content
        more_content_div = q_div.find('div', id='more-content')
        more_content = ''
        if more_content_div:
            # Remove images and get text
            more_clone = more_content_div
            for img in more_clone.find_all('img'):
                img.decompose()
            more_content = more_clone.get_text(strip=True)
            more_content = more_content[:1000] if len(more_content) > 1000 else more_content

        questions.append({
            'number': q_num,
            'text': q_text,
            'options': options,
            'answer_explanation': answer_text,
            'more_content': more_content
        })

    return questions


def generate_question_html(q_data, subject_abbr):
    """Generate HTML for a single question in new format"""
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

    html += f'''
                    </div>
                    <button class="check-answer button hidden">Check Answer</button>
                    <div class="container hidden">
                        <div class="answer hidden">
                            <strong>The correct answer is Option {correct_letter}: {correct_option['text'][:100]}.</strong>'''

    if q_data['answer_explanation']:
        html += f'''
                            <p>{q_data['answer_explanation']}</p>'''

    html += f'''
                            <div class="image-wrapper">
                                <img src="../IMG/NO {q_num}/OPTION {correct_letter}.png" style="width: 100%; height: auto;" alt="Option {correct_letter}" class="question-image">
                            </div>
                        </div>'''

    # Add wrong feedback for incorrect options
    for opt in options:
        if not opt['correct']:
            opt_letter = opt['letter']
            html += f'''
                        <div id="wrong-feedback-q{q_num}-opt{opt_letter}" class="wrong-feedback hidden">
                            <div class="wrong-feedback-title">Why "{opt['text'][:50]}..." is incorrect:</div>
                            <p>This is not the correct answer. The correct answer is Option {correct_letter}: {correct_option['text'][:100]}.</p>
                            <div class="image-wrapper">
                                <img src="../IMG/NO {q_num}/OPTION {opt_letter}.png" alt="Option {opt_letter}" class="question-image">
                            </div>
                        </div>'''

    more_content = q_data['more_content'] if q_data['more_content'] else 'Review the material to better understand this concept.'

    html += f'''
                        <button id="subject-button" class="button hidden">Learn More</button>
                        <div id="more-content" class="hidden">
                            <h3>More Information</h3>
                            <p>{more_content}</p>
                        </div>
                    </div>
                </div>
'''

    return html


def convert_file(input_file, output_file, subject, year):
    """Convert an old format file to new template format"""
    print(f"\nConverting {input_file}...")

    # Get full template
    template_content = get_template_structure()

    # Extract questions from old file
    questions = extract_questions_from_old_html(input_file)

    print(f"  Found {len(questions)} valid questions")

    # Parse template
    soup = BeautifulSoup(template_content, 'html.parser')

    # Update title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = f"DECIPHER-ACADEMY - {subject} {year} Exam Practice"

    # Update progress text in quiz-info
    progress_elem = soup.find('span', id='progressText')
    if progress_elem:
        progress_elem.string = f"Progress: 0/{len(questions)}"

    # Update score display in results section
    score_display = soup.find('div', class_='score-display')
    if score_display:
        score_display.string = f"0/{len(questions) * 5}"

    # Clear the quiz div and add new questions
    quiz_div = soup.find('div', class_='quiz')
    if quiz_div:
        # Clear existing questions
        quiz_div.clear()

        # Add all questions
        subject_abbr = subject[:3].upper()
        for q in questions:
            question_html = generate_question_html(q, subject_abbr)
            quiz_div.append(BeautifulSoup(question_html, 'html.parser'))

    # Update totalQuestions in JavaScript
    script_tag = soup.find('script', string=re.compile(r'let totalQuestions'))
    if script_tag:
        script_text = script_tag.string
        script_text = re.sub(
            r'let totalQuestions = document\.querySelectorAll\(\'\.question\'\)\.length;',
            f'let totalQuestions = {len(questions)};',
            script_text
        )
        script_tag.string = script_text

    # Write output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(str(soup.prettify()))

    print(f"  ✓ Converted successfully with {len(questions)} questions")
    return len(questions)


# File mappings
FILES_TO_CONVERT = [
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/2023objbio.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/2023objbio.html',
        'subject': 'Biology',
        'year': '2023'
    },
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2021/QUESTIONS/chem2021obj.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2021/QUESTIONS/chem2021obj.html',
        'subject': 'Chemistry',
        'year': '2021'
    },
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2022/QUESTIONS/2022chemistryobjquestions.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2022/QUESTIONS/2022chemistryobjquestions.html',
        'subject': 'Chemistry',
        'year': '2022'
    },
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2023/QUESTIONS/chemistryobj2023.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2023/QUESTIONS/chemistryobj2023.html',
        'subject': 'Chemistry',
        'year': '2023'
    },
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2021/QUESTIONS/2021physicsobj.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2021/QUESTIONS/2021physicsobj.html',
        'subject': 'Physics',
        'year': '2021'
    },
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2022/QUESTIONS/2022physicsobjquestions.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2022/QUESTIONS/2022physicsobjquestions.html',
        'subject': 'Physics',
        'year': '2022'
    },
    {
        'input': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2023/QUESTIONS/2023physicsobj.html',
        'output': '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2023/QUESTIONS/2023physicsobj.html',
        'subject': 'Physics',
        'year': '2023'
    }
]


if __name__ == '__main__':
    print("="* 70)
    print("Starting IMPROVED conversion of WAEC question files...")
    print("=" * 70)

    # First, restore original files from git
    print("\nRestoring original files from git...")
    import subprocess

    for file_info in FILES_TO_CONVERT:
        filepath = file_info['input']
        # Check out original from git
        result = subprocess.run(
            ['git', 'checkout', 'HEAD~1', '--', filepath],
            cwd='/home/user/Decipher-acad',
            capture_output=True
        )
        if result.returncode == 0:
            print(f"  ✓ Restored {os.path.basename(filepath)}")

    print("\n" + "=" * 70)
    print("Now converting files...")
    print("=" * 70)

    total_questions = 0
    for file_info in FILES_TO_CONVERT:
        try:
            num_questions = convert_file(
                file_info['input'],
                file_info['output'],
                file_info['subject'],
                file_info['year']
            )
            total_questions += num_questions
        except Exception as e:
            print(f"  ✗ ERROR converting {file_info['input']}: {e}")
            import traceback
            traceback.print_exc()

    print("\n" + "=" * 70)
    print(f"Conversion complete! Total questions converted: {total_questions}")
    print("=" * 70)
