with open('index.html', 'r') as f:
    lines = f.readlines()

import re

in_kp = False
current_topic = None
entries_count = 0
results = {}

for line_num, line in enumerate(lines, 1):
    stripped = line.strip()
    
    if stripped.startswith('const KEY_POINTS'):
        in_kp = True
        continue
    
    if in_kp and stripped == '};':
        if current_topic:
            results[current_topic] = entries_count
        break
    
    if in_kp:
        # Match 'Topic': [  (key line starting a topic)
        m = re.match(r"['\"]([^'\"]+)['\"]\s*:\s*\[", stripped)
        if m:
            if current_topic:
                results[current_topic] = entries_count
            current_topic = m.group(1)
            entries_count = 0
        else:
            # Entry lines: "'<strong>...</strong>...'", with or without trailing comma
            # They can have leading whitespace
            raw = stripped
            if raw.startswith("'<strong>") or raw.startswith('"<strong>'):
                entries_count += 1

new_topics = [
    "Men's Health", 'Autism Spectrum Disorder', 'Infectious Disease Pediatric',
    'Well Child', "Women's Health", 'Neonatal', 'Mental Health Pediatric',
    'Dermatology Pediatric', 'IPV', 'Asthma Pediatric', 'Cardiac Pediatrics',
    'Neurology Pediatrics', 'Endocrine Pediatrics', 'MSK Pediatric',
    'Obstetrics Antepartum', 'LGBTQIAP+', 'Infectious Disease', 'Well Child Visit',
    "Women's Health Gynecology", 'GI Pediatrics'
]

all_ok = True
for topic in new_topics:
    count = results.get(topic, 0)
    status = 'OK' if count == 5 else f'MISMATCH ({count})'
    if count != 5:
        all_ok = False
    print(f'{status}: "{topic}" = {count} entries')

print(f'\nAll new topics have 5 entries: {all_ok}')
print(f'Total distinct topics: {len(results)}')
