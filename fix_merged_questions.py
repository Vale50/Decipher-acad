#!/usr/bin/env python3
"""
Fix questions where options are merged into question text
"""

from bs4 import BeautifulSoup
import re

def fix_merged_options_in_file(filepath):
    """Fix questions where options are in the question text"""
    print(f"Fixing {filepath}...")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Find all question-text divs
    question_texts = soup.find_all('div', class_='question-text')

    fixed_count = 0
    for q_text_div in question_texts:
        text = q_text_div.get_text(strip=False)

        # Check if text contains pattern like "...?A. ...B. ...C. ...D. ..."
        # This pattern indicates options are merged
        if re.search(r'\?[A-D]\.\s+.+[A-D]\.\s+.+[A-D]\.\s+.+[A-D]\.\s+', text):
            # Extract just the question part (up to and including the question mark and following text before options)
            # Pattern: everything up to first "A. " or similar option marker
            match = re.match(r'(.*?\?[^A-D]*?)(?=[A-D]\.\s+\S)', text, re.DOTALL)
            if match:
                clean_text = match.group(1).strip()
                q_text_div.string = clean_text
                fixed_count += 1
                print(f"  Fixed merged options in question")

    if fixed_count > 0:
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify()))
        print(f"  ✓ Fixed {fixed_count} questions")
    else:
        print(f"  No issues found")

    return fixed_count

# Files to check
files_to_fix = [
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2023/QUESTIONS/2023physicsobj.html',
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2022/QUESTIONS/2022physicsobjquestions.html',
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/PHY/2021/QUESTIONS/2021physicsobj.html',
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/BIO/2023/QUESTIONS/2023objbio.html',
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2021/QUESTIONS/chem2021obj.html',
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2022/QUESTIONS/2022chemistryobjquestions.html',
    '/home/user/Decipher-acad/miracle/MIRACLE 2/SENIOR WAEC QUESTIONS/CHEM/2023/QUESTIONS/chemistryobj2023.html',
]

print("="* 70)
print("Fixing questions with merged options...")
print("=" * 70)

total_fixed = 0
for filepath in files_to_fix:
    total_fixed += fix_merged_options_in_file(filepath)

print("\n" + "=" * 70)
print(f"Done! Fixed {total_fixed} questions total")
print("=" * 70)
