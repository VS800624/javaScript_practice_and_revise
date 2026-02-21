n = int(input())
nums = list(map(int,input().split()))
first = second = float("-inf")

for num in nums:
  if num>first:
    second = first
    first = num
  elif num > second and num != first:
    second = num
print(second)