from typing import List
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        i = 0
        for j in range(len(nums)):
            if nums[j] % 2 == 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        return nums
    

n = int(input())
nums = list(map(int,input().split()))

i = 0
for j in range(n):
    if nums[j] % 2 == 0:
        nums[i] , nums[j] = nums[j] , nums[i]
        i += 1
print(*nums)