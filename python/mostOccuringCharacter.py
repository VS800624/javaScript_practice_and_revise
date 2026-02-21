s = input().strip().lower()

freq = {}

# Count frequency
for ch in s:
    if ch in freq:
        freq[ch] += 1
    else:
        freq[ch] = 1

# Find most frequent character
max_char = ""
max_count = 0

for ch in freq:
    if freq[ch] > max_count:
        max_count = freq[ch]
        max_char = ch

print("Most occurring character:", max_char)
print("Count:", max_count)