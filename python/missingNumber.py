def missingNumber(nums):
    nums.sort()
    for i in range(0,len(nums)):
        if i != nums[i]:
            return i 
    
    return len(nums)
x = missingNumber([0,2])
print(x)