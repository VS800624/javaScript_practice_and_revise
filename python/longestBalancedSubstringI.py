class Solution:
    def longestBalanced(self, s: str) -> int:

        # Step 1: Find length of the string
        n = len(s)

        # Step 2: This will store the maximum balanced substring length
        ans = 0

        # Step 3: Outer loop -> choose starting index of substring
        for i in range(n):

            # Step 4: Dictionary to store frequency of characters
            freq = {}

            # Step 5: Inner loop -> choose ending index of substring
            for j in range(i, n):

                # Step 6: Take current character
                ch = s[j]

                # Step 7: Count frequency of character
                if ch not in freq:
                    freq[ch] = 1      # first time seen
                else:
                    freq[ch] += 1     # increase count

                # Step 8: Get all frequency values
                values = list(freq.values())

                # Step 9: Check if all frequencies are equal
                # set(values) removes duplicates
                # if length is 1 → all values are same
                if len(set(values)) == 1:

                    # Step 10: Update maximum length
                    ans = max(ans, j - i + 1)

        # Step 11: Return final answer
        return ans

    
ans = Solution()
res = ans.longestBalanced("abbac")
print(res)