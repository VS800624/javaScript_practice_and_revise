# from typing import List
# class Solution: 
#     def constructTransformedArray(self, nums: List[int]) -> List[int]:
#         res = []
#         n = len(nums)

#         for i in range(n):
#             newIndex = (i + nums[i]) % n
#             res.append(nums[newIndex])

#         return res


n = int(input())
nums = list(map(int,input().split()))

res = []
for i in range(n):
  newIndex = (i + nums[i]) % n
  res.append(nums[newIndex])

print(*res)