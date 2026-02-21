class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if sorted(s) == sorted(t):
            return True
        return False

# or 
# s = input().strip()
# t = input().strip()

# print(sorted(s) == sorted(t))


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        mp = {}

        # Count characters of s
        for ch in s:
            if ch not in mp:
                mp[ch] = 1
            else:
                mp[ch] += 1

        # Reduce using t
        for ch in t:
            if ch not in mp or mp[ch] == 0:
                return False
            else:
                mp[ch] -= 1

        return True

# or
# s = input().strip()
# t = input().strip()
# isValid = False

# if len(s) != len(t):
#   print(isValid)
#   exit()

# mp = {}

# # Count characters of s
# for ch in s:
#     if ch not in mp:
#         mp[ch] = 1
#     else:
#         mp[ch] += 1

# # Reduce using t
# for ch in t:
#     if ch not in mp or mp[ch] == 0:
#       print(isValid)
#       exit()
#     else:
#         mp[ch] -= 1

# isValid = True
# print(isValid)

# or
s = input().strip()
t = input().strip()

isValid = True

if len(s) != len(t):
    isValid = False
else:
    mp = {}

    for ch in s:
        if ch not in mp:
          mp[ch] = 1
        else:
          mp[ch] += 1
    for ch in t:
        if ch not in mp or mp[ch] == 0:
            isValid = False
            break
        mp[ch] -= 1

print(isValid)

