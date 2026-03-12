from typing import List
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        maxLength = 0
        count = 0
        mp = {0: -1}

        for i in range(len(nums)):
            if nums[i] == 0:
                count += 1
            else:
                count -= 1

            if count not in mp:
                mp[count] = i
            else:
                length = i - mp[count]
                maxLength = max(length, maxLength)
        return maxLength

ans = Solution()
res = ans.findMaxLength([0,1,1,1,0,0,1])
print(res)