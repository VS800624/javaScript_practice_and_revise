num = int(input())

if num <= 1:
    print(num, "is not a prime number")
else:
   isPrime = True

for i in range(2,int(num**0.5)+1):
  if num % i == 0:
    isPrime = False
    break

if isPrime:
   print(num, "is a prime number")
else:
   print(num, "is not a prime number")