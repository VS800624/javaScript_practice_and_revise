# class Solution:
#     def checkPerfectNumber(self, num: int) -> bool:
        
#         if num <= 1:
#             return False
        
#         total = 1
        
#         for i in range(2, int(num**0.5) + 1):
            
#             if num % i == 0:
                
#                 total += i   # first divisor
                
#                 other = num // i
                
#                 if other != i and other != num:
#                     total += other
        
        
#         return total == num



class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        
        # Step 1: Numbers <= 1 are not perfect
        if num <= 1:
            return False
        
        total = 0
        
        # Step 2: Loop till sqrt(num)
        i = 1
        while i * i <= num:
            
            if num % i == 0:
                
                # First divisor
                total += i
                
                # Second divisor
                other = num // i
                
                # Avoid adding same divisor twice
                if other != i and other != num:
                    total += other
            
            i += 1
        
        # Step 3: Remove num itself (because 1*num = num)
        total -= num
        
        return total == num
