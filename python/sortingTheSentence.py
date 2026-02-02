          

# n = int(input())
# s = input()

# words = s.split()
# # print(words)
# # Sort words based on the last digit
# for i in range(n-1):
#   for j in range(i+1, len(words)):
#      word1 = int(words[i][len(words[i]) - 1])
#      word2 = int(words[j][len(words[j]) - 1])
#      if word2<word1: 
#         temp = words[i]
#         words[i] = words[j]
#         words[j] = temp
# # Remove digits from each word
# # words = ["".join(ch for ch in word if not ch.isdigit()) for word in words]
# # or 
# new_words = []
# for word in words:
#     new_word = ""
#     for ch in word:
#         if not ch.isdigit():
#             new_word += ch
#     new_words.append(new_word)

# words = new_words

# print(" ".join(words))  

# or 
n = int(input())
s = input()

words = s.split()

# Sort words using built-in sort (O(n log n))
words.sort(key=lambda word: int(word[-1]))

# Remove digits from each word
new_words = []
for word in words:
    new_word = ""
    for ch in word:
        if not ch.isdigit():
            new_word += ch
    new_words.append(new_word)

print(" ".join(new_words))
