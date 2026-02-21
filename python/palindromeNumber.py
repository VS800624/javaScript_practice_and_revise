class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0: return False
        copy = x
        res = 0
        while(x>0):
            res = res * 10 + x%10
            x = x // 10
        if copy != res:
            return False
        else: return True
        

# n = input()
# if n == n[::-1]:
#     print("Palindrome")
# else:
#     print("Not Palindrome")

n = int(input())
if n<0:
    print(False)
else:
    copy = n
    res = 0
    while(n>0):
        res = res * 10 + n%10
        n = n//10
    if copy != res:
      print(False)
    else:
      print(True)