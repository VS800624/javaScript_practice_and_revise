class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        letters = set()

        for ch in sentence:
            if ch.isalpha():
                letters.add(ch)
        
        return len(letters) == 26

isPangram = Solution()
result = isPangram.checkIfPangram("thequickbrownfoxjumpsoverthelazydog")
print(result)

s = input().lower().split()
letters = set()

for ch in s:
    if ch.isalpha():
        letters.add(ch)

if len(letters) == 26:
    print(True)
else: print(False)
