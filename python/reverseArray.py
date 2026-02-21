n = int(input())
arr = list(map(int,input().split()))

# print(*arr[::-1])

i = 0
j = len(arr) - 1

while i < j:
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    # or
    # s[i], s[j] = s[j], s[i]   # swap
    i += 1
    j -= 1

print(*arr)