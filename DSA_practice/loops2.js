// find the second largest in an array



 function secondLargest(arr){
    if(arr.length < 2) {
        return "Array should have atleast 2 elements";
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (i=0; i<arr.length; i++){
        if (arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
 }

  let arr = [4, 9, 0 , 2, 8, 7 , 9, 1]
 let result = secondLargest(arr)
 console.log(result)

// what if the array is empty or it has only has one element or it has negative number will solution work or it has duplicate value like [10, 20, 20]