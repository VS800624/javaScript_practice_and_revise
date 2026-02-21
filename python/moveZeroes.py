from typing import List
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        position = 0
         # move non-zero elements forward
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[position] = nums[i]
                position = position + 1
        # fill remaining position with zeroes
        for i in range(position, len(nums)):
            nums[i] = 0

n = int(input())
nums = list(map(int,input().split()))
position = 0

# move non-zero elements forward
for i in range(n):
    if nums[i] != 0:
      nums[position] = nums[i]
      position += 1

# fill remaining position with zeroes
for i in range(position, n):
    nums[i] = 0

print(*nums)
