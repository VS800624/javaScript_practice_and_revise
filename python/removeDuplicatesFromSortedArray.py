from typing import List
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0
        for i in range(len(nums)):
            if nums[i] > nums[k]:
                k += 1
                nums[k] = nums[i]
        
        # print(len(set(nums)))

        # for i in range(k+1,len(nums)):
        #     nums[i] = 0
        # print(nums)
        return k + 1
res = Solution()
ans = res.removeDuplicates([0,0,1,1,1,2,2,3,3,4])
print(ans)
