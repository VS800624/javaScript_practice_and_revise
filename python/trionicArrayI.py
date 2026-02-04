# from typing import List

# class Solution:
#     def trionic(self, nums: List[int]) -> bool:
#         n = len(nums)
#         if n < 4:
#             return False

#         i = 0
#         while i + 1 < n and nums[i+1] > nums[i]:
#             i += 1

#         if i == 0:
#             return False

#         j = i
#         while j + 1 < n and nums[j+1] < nums[j]:
#             j += 1

#         if j == i:
#             return False

#         k = j
#         while k + 1 < n and nums[k+1] > nums[k]:
#             k += 1

#         if k == j:
#             return False

#         return k == n - 1

# isTrionic = Solution()
# result = isTrionic.trionic([1,3,5,4,2,6])
# print(result)

n = int(input())
nums = list(map(int, input().split()))

if n < 4:
    print(False)
    exit()

# Phase 1: Increasing
i = 0
while i + 1 < n and nums[i + 1] > nums[i]:
    i += 1

if i == 0:
    print(False)
    exit()

# Phase 2: Decreasing
j = i
while j + 1 < n and nums[j + 1] < nums[j]:
    j += 1

if j == i:
    print(False)
    exit()

# Phase 3: Increasing
k = j
while k + 1 < n and nums[k + 1] > nums[k]:
    k += 1

if k == j:
    print(False)
    exit()

# Final check
print(k == n - 1)