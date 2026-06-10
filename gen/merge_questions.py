#!/usr/bin/env python3
"""Merge all generated question batches into questions.json"""
import json, sys, os

# Load existing questions
with open('/Users/binx/wgu-study-app/questions.json') as f:
    data = json.load(f)

print(f"Before merge: D118={len(data['D118'])}, D119={len(data['D119'])}, D120={len(data['D120'])}")

# Helper to exec batch file and return questions list
def load_batch(filepath):
    env = {}
    with open(filepath) as f:
        exec(f.read(), env)
    return env['questions']

batches_d119 = [
    'gen/d119_batch1.py',
    'gen/d119_batch2.py',
    'gen/d119_batch3.py',
]

batches_d120 = [
    'gen/d120_batch1.py',
    'gen/d120_batch2.py',
    'gen/d120_extra.py',
]

# Add D119 questions
for b in batches_d119:
    qs = load_batch(b)
    data['D119'].extend(qs)
    print(f"  Added {len(qs)} from {b}")

# Add D120 questions
for b in batches_d120:
    qs = load_batch(b)
    data['D120'].extend(qs)
    print(f"  Added {len(qs)} from {b}")

print(f"\nAfter merge: D118={len(data['D118'])}, D119={len(data['D119'])}, D120={len(data['D120'])}")

# Validate all questions have required fields
errors = []
for course, questions in data.items():
    for i, q in enumerate(questions):
        for field in ['topic', 'course', 'q', 'a', 'correct', 'rationale']:
            if field not in q:
                errors.append(f"{course}[{i}] missing field: {field}")
        if len(q.get('a', [])) != 4:
            errors.append(f"{course}[{i}] has {len(q.get('a',[]))} options (need 4): {q.get('q','')[:50]}")
        if q.get('correct') not in [0,1,2,3]:
            errors.append(f"{course}[{i}] invalid correct index: {q.get('correct')}")

if errors:
    print(f"\nVALIDATION ERRORS ({len(errors)}):")
    for e in errors[:20]:
        print(f"  {e}")
    sys.exit(1)

print(f"\nValidation passed: {sum(len(v) for v in data.values())} total questions, all valid")

# Save
with open('/Users/binx/wgu-study-app/questions.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Saved questions.json successfully")

# Topic summary
for course in ['D118','D119','D120']:
    topics = {}
    for q in data[course]:
        t = q.get('topic','Unknown')
        topics[t] = topics.get(t,0) + 1
    print(f"\n{course} topics ({len(data[course])} total):")
    for t,c in sorted(topics.items()):
        print(f"  {t}: {c}")
