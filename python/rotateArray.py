from typing import List
# class Solution:
#     def rotate(self, nums: List[int], k: int) -> None:
#         """
#         Do not return anything, modify nums in-place instead.
#         """
#         k = k% len(nums)
#         for i in range(k):
#             ele = nums.pop()
#             nums.insert(0,ele)
#         return nums

# or 
# def rotate(nums, k):
#     k = k % len(nums)
#     nums[:] = nums[-k:] + nums[:-k]

# or more optimized
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n
        reverseNums(nums,0,n-1)
        reverseNums(nums,0,k-1)
        reverseNums(nums,k,n-1)
        return nums

def reverseNums(arr,l,r):
    while l<r:
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l += 1
        r -= 1
