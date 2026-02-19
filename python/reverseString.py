from typing import List
class Solution:
    def reverseString(self, s: List[str]) -> None:
        i = 0
        j = len(s) - 1
        while(i<j):
            temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i += 1
            j -= 1
        return s

s = input().strip()   # take input
# s = list(input().strip())   # take input

s = list(s)           # convert string to list
# print(s)

i = 0
j = len(s) - 1

while i < j:
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    # or
    # s[i], s[j] = s[j], s[i]   # swap
    i += 1
    j -= 1

s = "".join(s)        # convert back to string

print(s)


# s = input().split()
# print(s[::-1])

# s = input()
# i = 0
# print(s[::-1])

