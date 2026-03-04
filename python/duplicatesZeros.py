from typing import List
class Solution:
  
  def duplicateZeros(self, arr: List[int]) -> None:
      i = 0

      while i < len(arr):
          if arr[i] == 0:
              j = len(arr) - 1
              while j > i:
                  arr[j] = arr[j - 1]
                  j -= 1

              i += 1   # skip duplicated zero
          
          i += 1 
      return arr

ans = Solution()
res = ans.duplicateZeros([1,0,2,3,0,4,5,0])
print(res)

