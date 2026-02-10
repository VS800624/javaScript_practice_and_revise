from typing import List
class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for i  in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i] = nums[i]*2
                nums[i+1] = 0
            
        position = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[position] = nums[i]
                position += 1
        
        while position < len(nums):
            nums[position] = 0
            position += 1

        return nums
ans = Solution()
res = ans.applyOperations([1,2,2,1,1,0])
print(res)

n = int(input())
nums = list(map(int,input().split()))

for i in range(n-1):
    if nums[i] == nums[i+1]:
        nums[i] = nums[i]*2
        nums[i+1] = 0
    
position = 0
for i in range(n):
    if nums[i] != 0:
      nums[position] = nums[i]
      position += 1

while position < n:
    nums[position] = 0
    position += 1

print(nums)