class Solution:
    def fib(self, n: int) -> int:
        if n <= 1: return n

        return self.fib(n-1) + self.fib(n-2) 

# or
# n = int(input())
# a,b = 0,1
# for i in range(n):
#     print(a, end=" ")
#     a,b = b, a+b

# or
n = int(input())

a, b = 0, 1
res = []

for i in range(n):
    res.append(str(a))
    a, b = b, a + b

print(" ".join(res))