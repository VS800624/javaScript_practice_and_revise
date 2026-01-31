# class Solution:
#     def mostWordsFound(self, sentences) -> int:
#         maxWords = 0
#         for i in range(len(sentences)):
#             words = sentences[i].split()
#             count = len(words)
#             maxWords = max(maxWords,count)
#         return maxWords
    
# word = Solution()
# result = word.mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])
# print(result)

# n = int(input())

# sentences = []
# for _ in range(n):
#     sentences.append(input())

# maxWords = 0
# for i in range(n):
#     words = sentences[i].split()
#     count = len(words)
#     maxWords = max(maxWords, count)

# print(maxWords)

# or 

n = int(input())

maxWords = 0
for _ in range(n):
    sentence = input()
    maxWords = max(maxWords, len(sentence.split()))

print(maxWords)
