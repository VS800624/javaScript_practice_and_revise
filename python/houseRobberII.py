from typing import List
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        prev1 = 0
        prev2 = 0
        for i in range(len(nums) - 1):
            temp = prev1
            prev1 = max(prev2+nums[i], prev1)
            prev2 = temp
        
        result1 = prev1
        prev1 = 0
        prev2 = 0
        for i in range (1,len(nums)):
            temp = prev1
            prev1 = max(prev2+nums[i], prev1)
            prev2 = temp

        return max(result1,prev1)