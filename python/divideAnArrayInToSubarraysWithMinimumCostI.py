# class Solution:
#     def minimumCost(self, nums):
#         firstMin = float("inf")
#         secondMin = float("inf")
#         for i in range(1, len(nums)):
#             if nums[i]<firstMin:
#                 secondMin = firstMin
#                 firstMin = nums[i]
#             elif nums[i]<secondMin:
#                 secondMin = nums[i]
#         return nums[0] + firstMin + secondMin
    
# min = Solution()
# result = min.minimumCost([10,3,1,1])
# print(result)


n = int(input())
nums = list(map(int,input().split()))
firstMin = float("inf")
secondMin = float("inf")
for i in range(1, n):
    if nums[i]<firstMin:
        secondMin = firstMin
        firstMin = nums[i]
    elif nums[i]<secondMin:
        secondMin = nums[i]
print(nums[0] + firstMin + secondMin)