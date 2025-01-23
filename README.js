def calc(a, b):
    if a == 0 or b == 0:
        return "Операция невозможна"
    elif a % 2 == 0 and b % 2 == 0:
        return a + b
    else:
        return a - b

print(calc(4, 6))  
print(calc(3, 5))  
print(calc(0, 5))  
