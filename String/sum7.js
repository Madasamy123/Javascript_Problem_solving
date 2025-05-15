// 8. Merge Two Sorted Arrays
// Write a function that merges two sorted arrays into a single sorted array.

// Example:

// mergeArrays([1, 3, 5], [2, 4, 6]); // Output: [1, 2, 3, 4, 5, 6]


function mergesortArr(arr1,arr2){
    
    let result=[];
    
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]);
    }
    for(let j=0;j<arr2.length;j++){
        result.push(arr2[j])
    }
    
    console.log(result.sort())
    
}mergesortArr([1, 3, 5], [2, 4, 6])