class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if sorted(s) == sorted(t):
            return True
        return False

# or 
# s = input().strip()
# t = input().strip()

# print(sorted(s) == sorted(t))

