s = input()
words = s.split()
print( " ".join(words[::-1]))

# or
# s = input()
# words = s.split()

# for i in range(len(words)-1, -1, -1):
#     print(words[i], end=" ")