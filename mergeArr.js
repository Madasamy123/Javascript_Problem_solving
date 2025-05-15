// 8. Merge Two Sorted Arrays
// Write a function that merges two sorted arrays into a single sorted array.

// Example:

// mergeArrays([1, 3, 5], [2, 4, 6]); // Output: [1, 2, 3, 4, 5, 6]


function mergesortArr(arr1,arr2){
    
    let i=0;
    let j=0;
    
    let mergeSort=[];
    
   
   while(i<arr1.length && j<arr2.length){
       
       if(arr1[i]<=arr2[j]){
           mergeSort.push(arr1[i]);
           i++;
       }
       else{
           mergeSort.push(arr2[j]);
           j++;
       }
   }
  
   while(i<arr1.length){
       mergeSort.push(arr1[i])
       i++;
   }
   
   
   
  while(j<arr2.length){
      mergeSort.push(arr2[j])
      j++;
  }
  
  console.log(mergeSort)
      
  }mergesortArr([1, 3, 5], [2, 4, 6])