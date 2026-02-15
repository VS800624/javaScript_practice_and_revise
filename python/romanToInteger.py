class Solution:
    def romanToInt(self, s: str) -> int:
        ans = 0
        roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
        
        s = s.replace("IV", "IIII")
        s = s.replace("IX", "VIIII")
        s = s.replace("XL", "XXXX")
        s = s.replace("XC", "LXXXX") 
        s = s.replace("CD", "CCCC")
        s = s.replace("CM", "DCCCC")

        for i in range(len(s)):
            ans += roman[s[i]]

        return ans

# or  
class Solution:
    def romanToInt(self, s: str) -> int:
        ans = 0
        roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
        
        for i in range(len(s)-1):
            if roman[s[i]] < roman[s[i+1]]:
                ans -= roman[s[i]]
            else:
                ans += roman[s[i]]

        return ans + roman[s[-1]]  
    
    
n = int(input())
s = input()

ans = 0
roman = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

for i in range(n-1):
    if roman[s[i]] < roman[s[i+1]]:
        ans -= roman[s[i]]
    else:
        ans += roman[s[i]]

print(ans + roman[s[-1]])