class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        res = 0
        for ch in columnTitle:
            value = ord(ch) - 64
            res = res * 26 + value
        return res
    
res = Solution()
ans = res.titleToNumber("ZY")
print(ans)

# n = int(input())
# columnTitle = input("Enter column title: ").upper()
columnTitle = input().strip().upper()

# Check if input is string (always true for input, but for safety)
# if not isinstance(columnTitle, str):
#     print("Please enter a string value")
#     exit() 

res = 0

for ch in columnTitle:
    value = ord(ch) - 64    # A=1, B=2, ..., Z=26
    res = res* 26 + value
print(res)