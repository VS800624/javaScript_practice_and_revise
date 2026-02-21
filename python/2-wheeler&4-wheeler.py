# Find number of 2-wheelers and 4-wheelers when total vehicles and total wheels are given.

# Let:
# x = number of 2-wheelers
# y = number of 4-wheelers

# Then:
# Equation 1 (Vehicles)
# x + y = V
# Equation 2 (Wheels)
# 2x + 4y = W

# Solve These Two Equations

# From (1):

# x = V - y

# Put in (2):

# 2(V - y) + 4y = W
# 2V - 2y + 4y = W
# 2V + 2y = W
# 2y = W - 2V
# y = (W - 2V) / 2

# Then:

# x = V - y

# Final Formula (Easy to Remember)
# 4-wheeler = (W - 2V) / 2
# 2-wheeler = V - 4-wheeler

V = int(input())   # total vehicles
W = int(input())   # total wheels

# Calculate 4-wheelers
four = (W - 2*V) // 2

# Calculate 2-wheelers
two = V - four

# Check valid case
if four < 0 or two < 0 or (2*two + 4*four != W):
    print("Invalid Input")
else:
    print("Two Wheelers:", two)
    print("Four Wheelers:", four)