# with in-built
# n = int(input())
# print(bin(n)[2:])

# without in-built
n = int(input())

binary = ""

while n > 0:
    rem = n % 2
    binary = str(rem) + binary
    n = n // 2

print("Binary:", binary)