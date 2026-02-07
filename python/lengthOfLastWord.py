class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        arr = s.strip().split()
        return len(arr[-1])

word = Solution()
result = word.lengthOfLastWord("luffy is still joyboy")
print(result)

# n = int(input())
# word = input()
# arr = word.strip().split()
# print(len(arr[-1]))

s = input().strip()

count = 0
for i in range(len(s)-1,-1,-1):
    if s[i] == " ":
        break
    count += 1
print(count)