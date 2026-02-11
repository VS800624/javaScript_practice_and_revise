from typing import List
class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        minVal = nums[0]
        maxDiff = 0
        for i in range(len(nums)):
            if(nums[i]<minVal):
                minVal = nums[i]
            elif nums[i] - minVal > maxDiff:
                maxDiff = nums[i] - minVal
        return maxDiff if maxDiff != 0 else -1

ans = Solution()
res = ans.maximumDifference([1,5,2,10])
print(res)

# n = int(input())
# nums = list(map(int,input().split()))

# minVal = nums[0]
# maxDiff = 0

# for i in range(n):
#     if nums[i]<minVal:
#         minVal = nums[i]
#     elif nums[i] - minVal > maxDiff:
#         maxDiff = nums[i] - minVal

# print(maxDiff) if maxDiff != 0 else print(-1)

n = int(input())
nums = list(map(int, input().split()))

minVal = nums[0]
maxDiff = 0

for i in range(1, n):
    if nums[i] < minVal:
        minVal = nums[i]
    else:
        maxDiff = max(maxDiff, nums[i] - minVal)

print(maxDiff if maxDiff > 0 else -1)