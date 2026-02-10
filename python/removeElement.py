from typing import List
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # position for valid elements
        k = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        return k
    
remove = Solution()
res = remove.removeElement([0,1,2,2,3,0,4,2],2)
print(res)

n = int(input())
nums = list(map(int,input().split()))
val = int(input())
# position for valid elements
k = 0     
for i in range(n):
    if nums[i] != val:
        nums[k] = nums[i]
        k += 1
print(k) 