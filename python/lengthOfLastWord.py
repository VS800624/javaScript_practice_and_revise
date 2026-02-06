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