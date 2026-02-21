n = input()
digits = len(n)
total = 0

for d in n:
    total += int(d) ** digits

if total == int(n):
    print("Armstrong")
else:
    print("Not Armstrong")