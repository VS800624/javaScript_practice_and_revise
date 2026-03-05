from typing import List
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in range(k):
            ele = nums.pop()
            nums.insert(0,ele)
        return nums

# or 
# def rotate(nums, k):
#     k = k % len(nums)
#     nums[:] = nums[-k:] + nums[:-k]