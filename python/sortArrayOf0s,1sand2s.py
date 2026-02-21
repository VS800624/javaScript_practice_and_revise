arr = list(map(int, input().split()))

c0 = arr.count(0)
c1 = arr.count(1)
c2 = arr.count(2)

res = [0]*c0 + [1]*c1 + [2]*c2

print(*res)

# or
# arr = list(map(int, input().split()))

# c0 = 0
# c1 = 0
# c2 = 0

# # Count
# for num in arr:
#     if num == 0:
#         c0 += 1
#     elif num == 1:
#         c1 += 1
#     else:
#         c2 += 1

# # Rebuild
# result = []

# result += [0] * c0
# result += [1] * c1
# result += [2] * c2

# print(*result)

