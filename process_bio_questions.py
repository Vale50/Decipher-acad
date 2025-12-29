#!/usr/bin/env python3
"""
Script to process biology questions and update them with proper structure,
images, and educational content.
"""

import re
import json
from pathlib import Path

def read_html_file(file_path):
    """Read the HTML file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def write_html_file(file_path, content):
    """Write content to HTML file"""
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def extract_question_data(html_content):
    """Extract question data from HTML"""
    questions = []

    # Pattern to match each question div
    question_pattern = r'<div class="question" id="question-(\d+)">(.*?)(?=<div class="question" id="question-\d+">|<!-- beginning no \d+ question -->|$)'

    matches = re.finditer(question_pattern, html_content, re.DOTALL)

    for match in matches:
        q_num = match.group(1)
        q_content = match.group(2)

        # Extract question text
        q_text_match = re.search(r'<div class="question-text">(.*?)</div>', q_content, re.DOTALL)
        q_text = q_text_match.group(1).strip() if q_text_match else ""

        # Extract options and find correct answer
        options = []
        option_pattern = r'<div class="option" data-correct="(true|false)" data-option-id="q\d+-opt([A-D])">\s*<span class="option-label">[A-D]</span>\s*<span>(.*?)</span>'

        for opt_match in re.finditer(option_pattern, q_content, re.DOTALL):
            is_correct = opt_match.group(1) == "true"
            option_letter = opt_match.group(2)
            option_text = opt_match.group(3).strip()

            options.append({
                'letter': option_letter,
                'text': option_text,
                'is_correct': is_correct
            })

        # Find correct option
        correct_option = next((opt for opt in options if opt['is_correct']), None)

        questions.append({
            'number': int(q_num),
            'text': q_text,
            'options': options,
            'correct_option': correct_option,
            'full_content': q_content
        })

    return questions

def add_option_images_to_answer(q_num, correct_option_letter, answer_div_content):
    """Add option images to the answer section"""
    # Check if image already exists
    if f'../IMG/NO' in answer_div_content or f'../IMG/NO.' in answer_div_content:
        return answer_div_content

    # Find where to insert the image (after the first paragraph or strong tag)
    image_html = f'''
                            <div class="image-wrapper">
                                <img src="../IMG/NO {q_num}/OPTION {correct_option_letter}.png" style="width: 100%; height: auto;" alt="Option {correct_option_letter}" class="question-image">
                            </div>'''

    # Insert after the opening <strong> tag and its closing </strong> or after first <p> tag
    if '<p>' in answer_div_content:
        # Insert after first paragraph
        parts = answer_div_content.split('</p>', 1)
        if len(parts) > 1:
            return parts[0] + '</p>' + image_html + parts[1]

    # If no paragraph, insert after strong tag
    if '</strong>' in answer_div_content:
        parts = answer_div_content.split('</strong>', 1)
        if len(parts) > 1:
            return parts[0] + '</strong>' + image_html + parts[1]

    return answer_div_content + image_html

def main():
    """Main processing function"""
    html_file = Path("/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/2023objbio.html")

    print("Reading HTML file...")
    content = read_html_file(html_file)

    print("Extracting question data...")
    questions = extract_question_data(content)

    print(f"Found {len(questions)} questions")

    # Print summary
    for q in questions[:10]:
        print(f"\nQuestion {q['number']}: {q['text'][:100]}...")
        print(f"  Correct answer: {q['correct_option']['letter']} - {q['correct_option']['text']}")
        print(f"  Total options: {len(q['options'])}")

if __name__ == "__main__":
    main()
