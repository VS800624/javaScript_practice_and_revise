def factorial(n):
  if n ==0:
    return 1
  else:
    return n * factorial(n-1)

print(factorial(5))

# or 
num = int(input())
result  = 1

if num < 0:
  print("Factorial not defined")


for i in range(1, num+1):
  result = result * i

print(result)

# num = int(input())
# result = 1

# i = 1
# while i <= num:
#     result *= i
#     i += 1

# print(result)