# s = input()
# rev = s[::-1]

# if s == rev:
#   print(True , "Number is a Palindrome")
# else:
#   print(False, "Number is not a palindrome")

# or 
s = input()
rev = ""

for ch in s:
  rev = ch + rev
# print(rev)
if rev == s:
  print(True)
else:
  print(False)