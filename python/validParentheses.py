class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) == 1: return False
        stack = []
        for i in range(len(s)):
            if s[i] == "(" or s[i] == "[" or s[i] == "{":
                stack.append(s[i])
            else:
                if not stack:
                    return False
                top = stack.pop()
                if s[i] == ")" and top != "(" or s[i] == "}" and top != "{" or s[i] == "]" and top!= "[":
                    return False
                
        return len(stack) == 0
    
valid = Solution()
result = valid.isValid("()[]{}")
print(result)


s = input().strip()
n = len(s)
if n == 0 or n == 1: print(False)
valid = True

stack = []
for ch in s:
    if ch in "({[":
        stack.append(ch)
    else: 
        if not stack:
          valid = False
          break
        top = stack.pop()
        if ch == ")" and top != "(" or ch == "}" and top != "{" or ch == "]" and top!= "[":
          valid = False
          break
                
if valid and len(stack) == 0:
    print(True)
else:
    print(False)


class Solution:
    def isValid(self, s: str) -> bool:
        n = len(s)
        if n <= 1:
            return False

        stack = []

        brackets = {
            "{": "}",
            "[": "]",
            "(": ")"
        }

        for ch in s:
            if ch in brackets:          # opening bracket
                stack.append(ch)
           # if ch in brackets.values():
            #  print("This is a closing bracket")

            else:                      # closing bracket
                if not stack:
                    return False

                top = stack.pop()

                if brackets[top] != ch:
                    return False

        return len(stack) == 0