from typing import List
class Solution:
    def rob(self, nums: List[int]) -> int:
        prev1 = 0
        prev2 = 0
        for i in range(len(nums)):
            temp = prev1
            prev1 = max(prev2+nums[i],prev1)
            prev2 = temp
        return prev1
    
res = Solution()
ans = res.rob([2,1,1,2])
print(ans)

n = int(input())
nums = list(map(int,input().split()))
prev1 = 0
prev2 = 0

for i in range(n):
    temp = prev1
    prev1 = max(prev2+nums[i],prev1)
    prev2 = temp
print(prev1)