class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        filteredString = ""
        rev = ""

        for i in range(len(s)):
            if s[i].isalnum():
                filteredString = filteredString + s[i]
                rev = s[i] + rev

        return filteredString == rev

s = input()
s = s.lower()
filteredString = ""
rev = ""

for i in range(len(s)):
    if s[i].isalnum():
        filteredString = filteredString + s[i]
        rev = s[i] + rev

print(filteredString == rev)

