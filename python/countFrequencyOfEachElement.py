n = int(input())
nums = list(map(int,input().split()))
freq = {}

for num in nums:
  if num not in freq:
    freq[num] = 1
  else:
    freq[num] += 1

# for key , val in freq.items():
#   print(f"{key} occurs {val} times")
for key in freq:
  print(key, "occurs", freq[key], "times")