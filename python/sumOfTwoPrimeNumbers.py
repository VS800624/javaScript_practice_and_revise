# Express a number as the sum of two prime numbers

# Input: 34
# Output: 34 can be expressed as the sum of 3 and 31

def isPrime(n):
  if n <= 1:
    return False
  
  for i in range(2, int(n**0.5)+1):
    if n%i == 0:
      return False
    
  return True

num = int(input())
found = False

for i in range(2,num):
  if isPrime(i) and isPrime(num - i):
    # print(num, "can be expressed as the sum of", i, "and", num - i)
    print(i, num-i)
    found = True
    break
if not found:
  print(num, "cannot be expressed as the sum of two prime numbers")

  