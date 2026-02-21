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

# s = input()
# s = s.lower()
# filteredString = ""
# rev = ""

# for i in range(len(s)):
#     if s[i].isalnum():
#         filteredString = filteredString + s[i]
#         rev = s[i] + rev

# print(filteredString == rev)

s = input()
s = s.lower()

i = 0
j = len(s) - 1
while i<j:
    if not s[i].isalnum():
        i += 1
    elif not s[j].isalnum():
        j += 1
    elif s[i] == s[j]:
        i += 1
        j += 1
    else: 
      print(False)
      break

else:
  print(True)
