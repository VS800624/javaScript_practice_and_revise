// Write a function that takes any array containing a mix of characters and numbers and returns a sorted arrays.
// The sorted arrays should have all characters (letters) in ascending order first,  followed  by all numbers  in ascending order.

function customSort(arr) {
  //write your implementation here
  const char = []
  const nums = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === "string" && arr[i].length === 1) {
      char.push(arr[i])
    } else if (typeof(arr[i]) === 'number') {
      nums.push(arr[i])
    }
  }

  // sorting chararcters
 for (let i = 0; i < char.length; i++) {
    for (let j= 0 ; j< char.length - 1 - i ; j++){
        if (char[j] > char[j + 1]) {
          let temp = char[j]
          char[j] = char[j + 1]
          char[j + 1] = temp
        }
    }
  }
  // sorting numbers
  for (let i = 0; i < nums.length; i++) {
    for (let j= 0 ; j< nums.length - 1 - i ; j++){
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j]
          nums[j] = nums[j + 1]
          nums[j + 1] = temp
        }
    }
  }
  console.log(char)
  console.log(nums)
  return [...char, ...nums]
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input))
