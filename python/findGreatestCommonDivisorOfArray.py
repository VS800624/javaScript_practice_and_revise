from typing import List
class Solution:
    def findGCD(self, nums: List[int]) -> int:
        minVal = nums[0]
        maxVal = nums[0]
        for i in range(1,len(nums)):
            minVal = min(minVal,nums[i])
            maxVal = max(maxVal,nums[i])

        for i in range(minVal,0,-1):
            if minVal%i == 0 and maxVal%i == 0:
                return i
            
n = int(input())
nums = list(map(int,input().split()))

maxVal = nums[0]
minVal = nums[0]

for i in range(1,len(nums)):
    minVal = min(minVal,nums[i])
    maxVal = max(maxVal,nums[i])

for i in range(minVal,0,-1):
    if minVal%i == 0 and maxVal%i == 0:
        print(i)
        break