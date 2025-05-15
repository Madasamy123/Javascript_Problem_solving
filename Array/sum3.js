// 5️⃣ Rotate an Array by K Positions:
// Rotate the elements of an array to the right by k positions.

// Input: ([1, 2, 3, 4, 5], 2)
// Output: [4, 5, 1, 2, 3]


function rotationArr(arr,k){

    for(let i=0;i<k;i++){

        let first=arr.pop();
        arr.unshift(first);

    }

    console.log(arr);
    

}rotationArr([1, 2, 3, 4, 5], 1)