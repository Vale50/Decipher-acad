#!/usr/bin/env python3
"""
Script to convert old WAEC question files to the new template format
"""

from bs4 import BeautifulSoup
import re
import os

# Template HTML structure (from test.html)
TEMPLATE_HEAD = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DECIPHER-ACADEMY - {subject} {year} Exam Practice</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">'''

# Read the template CSS and script from test.html
def get_template_structure():
    template_file = "/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/test.html"
    with open(template_file, 'r', encoding='utf-8') as f:
        template_content = f.read()

    soup = BeautifulSoup(template_content, 'html.parser')

    # Extract style section
    styles = str(soup.find('style'))

    # Extract header
    header = str(soup.find('div', class_='header'))

    # Extract modal
    modal = str(soup.find('div', id='welcomeModal'))

    # Extract dashboard
    dashboard = str(soup.find('div', class_='dashboard'))
    dashboard_toggle = str(soup.find('button', class_='dashboard-toggle'))

    # Extract script
    script_tag = soup.find('script', string=lambda text: text and 'document.addEventListener' in text)
    script = str(script_tag) if script_tag else ""

    return styles, header, modal, dashboard, dashboard_toggle, script


def extract_questions_from_old_html(filepath):
    """Extract questions from old HTML format"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')
    questions = []

    # Find all question divs
    question_divs = soup.find_all('div', class_='question', recursive=True)

    for q_div in question_divs:
        # Extract question number
        q_num_elem = q_div.find('div', class_='question-number')
        if not q_num_elem:
            continue

        q_num_text = q_num_elem.get_text(strip=True)
        # Extract just the number
        num_match = re.search(r'(\d+)', q_num_text)
        if not num_match:
            continue
        q_num = num_match.group(1)

        # Extract question text
        q_text_elem = q_div.find('p', class_='question-number')
        if not q_text_elem:
            # Try alternative structure
            q_text_elem = q_div.find('p')

        if not q_text_elem:
            continue

        q_text = q_text_elem.get_text(strip=True)

        # Skip if it's an instruction
        if 'Each question is followed by four options' in q_text:
            continue

        # Extract options
        options_div = q_div.find('div', class_='options')
        if not options_div:
            continue

        options = []
        option_divs = options_div.find_all('div', class_='option')

        for opt_div in option_divs:
            opt_text = opt_div.get_text(strip=True)
            is_correct = opt_div.get('data-correct', 'false') == 'true'

            # Extract option letter and text
            opt_match = re.match(r'([A-D])\.?\s*(.*)', opt_text)
            if opt_match:
                opt_letter = opt_match.group(1)
                opt_content = opt_match.group(2)
            else:
                # Fallback
                opt_letter = opt_text[0] if opt_text else ''
                opt_content = opt_text[1:].strip() if len(opt_text) > 1 else opt_text

            options.append({
                'letter': opt_letter,
                'text': opt_content,
                'correct': is_correct
            })

        if len(options) != 4:
            continue

        # Extract answer explanation
        answer_div = q_div.find('div', class_='answer')
        answer_text = ''
        if answer_div:
            answer_text = answer_div.get_text(strip=True)

        # Extract more content
        more_content_div = q_div.find('div', id='more-content')
        more_content = ''
        if more_content_div:
            more_content = more_content_div.get_text(strip=True)

        questions.append({
            'number': q_num,
            'text': q_text,
            'options': options,
            'answer_explanation': answer_text,
            'more_content': more_content
        })

    return questions


def generate_question_html(q_data, q_index):
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

    html += '''
                    </div>
                    <button class="check-answer button hidden">Check Answer</button>
                    <div class="container hidden">
                        <div class="answer hidden">
                            <strong>The correct answer is Option ''' + correct_letter + ''': ''' + correct_option['text'] + '''.</strong>
                            <p>''' + (q_data['answer_explanation'] if q_data['answer_explanation'] else 'This is the correct answer.') + '''</p>
                            <div class="image-wrapper">
                                <img src="../IMG/NO ''' + q_num + '''/OPTION ''' + correct_letter + '''.png" style="width: 100%; height: auto;" alt="Option ''' + correct_letter + '''" class="question-image">
                            </div>
                        </div>'''

    # Add wrong feedback for incorrect options
    for opt in options:
        if not opt['correct']:
            opt_letter = opt['letter']
            html += f'''
                        <div id="wrong-feedback-q{q_num}-opt{opt_letter}" class="wrong-feedback hidden">
                            <div class="wrong-feedback-title">Why "{opt['text']}" is incorrect:</div>
                            <p>This is not the correct answer. The correct answer is Option {correct_letter}.</p>
                            <div class="image-wrapper">
                                <img src="../IMG/NO {q_num}/OPTION {opt_letter}.png" alt="Option {opt_letter}" class="question-image">
                            </div>
                        </div>'''

    html += '''
                        <button id="subject-button" class="button hidden">Learn More</button>
                        <div id="more-content" class="hidden">
                            <h3>More Information</h3>
                            <p>''' + (q_data['more_content'] if q_data['more_content'] else 'Review the material to better understand this concept.') + '''</p>
                        </div>
                    </div>
                </div>
'''

    return html


def convert_file(input_file, output_file, subject, year):
    """Convert an old format file to new template format"""
    print(f"Converting {input_file}...")

    # Get template structure
    styles, header, modal, dashboard, dashboard_toggle, script = get_template_structure()

    # Extract questions from old file
    questions = extract_questions_from_old_html(input_file)

    print(f"  Found {len(questions)} questions")

    # Build new HTML
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DECIPHER-ACADEMY - {subject} {year} Exam Practice</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    {styles}
</head>
<body>
    {header}

    {modal}

    {dashboard}

    {dashboard_toggle}

    <!-- Main Container -->
    <div class="main-container">
        <div class="quiz-container">
            <!-- Quiz Information -->
            <div class="quiz-info">
                <div class="quiz-status">
                    <div class="quiz-info-item">
                        <i class="fas fa-user status-icon"></i>
                        <span id="userName">Student</span>
                    </div>
                    <div class="quiz-info-item">
                        <i class="fas fa-medal status-icon"></i>
                        <span id="userScore">Score: 0</span>
                    </div>
                    <div class="quiz-info-item">
                        <i class="fas fa-tasks status-icon"></i>
                        <span id="progressText">Progress: 0/{len(questions)}</span>
                    </div>
                </div>
                <div class="timer hidden">
                    <i class="fas fa-clock"></i>
                    <span id="timeLeft">00:00</span>
                </div>
            </div>
            <div class="progress-container">
                <div class="progress-bar" id="progressBar"></div>
            </div>

            <!-- Instruction Area -->
            <div class="instruction-area">
                <div class="instruction-title">Instructions</div>
                <div class="instruction-text">
                    Each question is followed by four options lettered A to D. Find the correct option for each question.
                </div>
            </div>

            <!-- Questions -->
            <div class="quiz">'''

    # Add all questions
    for i, q in enumerate(questions):
        html += generate_question_html(q, i)

    html += '''
            </div>

            <!-- Results Section -->
            <div class="results-section" id="resultsSection">
                <div class="results-title">Quiz Completed</div>
                <div class="score-display">0/''' + str(len(questions) * 5) + '''</div>
                <div class="result-message">You've completed the exam!</div>
                <div class="results-buttons">
                    <button class="button review-btn" id="reviewQuestions">Review All Questions</button>
                    <button class="button review-btn" id="reviewFailedQuestions">Review Failed Questions</button>
                    <button class="button retry-btn" id="retryQuiz">Try Again</button>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    {script}
</body>
</html>'''

    # Write output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"  Converted successfully to {output_file}")
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
    print("Starting conversion of WAEC question files...")
    print("=" * 60)

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
            print(f"  ERROR converting {file_info['input']}: {e}")
            import traceback
            traceback.print_exc()

    print("=" * 60)
    print(f"Conversion complete! Total questions converted: {total_questions}")
