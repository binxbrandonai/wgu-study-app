#!/usr/bin/env python3
"""
Extract practice questions from Leik FNP Review 4th Ed PDF
Focusing on: Women's Health, Older Adult Care, Pregnant Patient
"""

import PyPDF2
import re
import json

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF file"""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text

def parse_questions(text):
    """Parse questions from the extracted text"""
    questions = []
    
    # Look for question patterns - typically numbered with choices A-D
    # Pattern: Question text followed by choices A), B), C), D) and answer
    
    # Split by common question markers
    lines = text.split('\n')
    
    current_q = None
    current_choices = []
    in_question = False
    question_text = ""
    
    for i, line in enumerate(lines):
        line = line.strip()
        
        # Skip empty lines
        if not line:
            continue
            
        # Look for numbered questions (1., 2., etc. or variations)
        if re.match(r'^\d+[\.\)]\s+', line):
            # Save previous question if exists
            if current_q and current_choices:
                questions.append({
                    'question': current_q,
                    'choices': current_choices,
                    'raw_text': question_text
                })
            
            # Start new question
            current_q = re.sub(r'^\d+[\.\)]\s+', '', line)
            current_choices = []
            question_text = line
            in_question = True
            
        # Look for choice patterns (A., A), etc.)
        elif re.match(r'^[A-D][\.\)]\s+', line) and in_question:
            choice = re.sub(r'^[A-D][\.\)]\s+', '', line)
            current_choices.append(choice)
            question_text += "\n" + line
            
        # Continue building question or choice text
        elif in_question and current_q:
            if len(current_choices) == 0:
                current_q += " " + line
            elif len(current_choices) > 0 and len(current_choices) < 4:
                # Might be continuation of last choice
                if current_choices:
                    current_choices[-1] += " " + line
            question_text += "\n" + line
    
    # Add last question
    if current_q and current_choices:
        questions.append({
            'question': current_q,
            'choices': current_choices,
            'raw_text': question_text
        })
    
    return questions

def main():
    pdf_path = 'leik_preview.pdf'
    
    print("Extracting text from PDF...")
    text = extract_text_from_pdf(pdf_path)
    
    print(f"Extracted {len(text)} characters")
    
    # Save extracted text for manual review
    with open('leik_extracted.txt', 'w') as f:
        f.write(text)
    print("Saved extracted text to leik_extracted.txt")
    
    # Parse questions
    questions = parse_questions(text)
    print(f"Found {len(questions)} potential questions")
    
    # Save parsed questions
    with open('leik_parsed_questions.json', 'w') as f:
        json.dump(questions, f, indent=2)
    print("Saved parsed questions to leik_parsed_questions.json")

if __name__ == '__main__':
    main()
