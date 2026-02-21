# for GCD
# a , b = map(int, input().split())
# while b:
#   a, b = b , a%b
# print(a)

# for both gcd and lcm
a, b = map(int, input().split())

x, y = a, b   # store original values

# Find GCD
while b:
    a, b = b, a % b

gcd = a

# Find LCM
lcm = (x * y) // gcd

print("GCD:", gcd)
print("LCM:", lcm)