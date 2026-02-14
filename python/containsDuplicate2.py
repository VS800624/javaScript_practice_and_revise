from typing import List
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        mp = {}
        for i in range(len(nums)):
            if nums[i] in mp:
                lastIndex = mp[nums[i]]
                if i - lastIndex <= k:
                    return True
            
            # Update index every time
            mp[nums[i]] = i
            
        return False
    
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
containsDup = False

mp = {}
for i in range(n):
    if nums[i] in mp:
        lastIndex = mp[nums[i]]
        if i - lastIndex <=k :
            containsDup = True
            break
      
    mp[nums[i]] = i
print(containsDup)
