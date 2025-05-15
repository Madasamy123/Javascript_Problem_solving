// 3️⃣ Find the Intersection of Two Arrays:
// Find the common elements between two arrays.

// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function intersection(arr1,arr2){

    let newarr=[]

    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            newarr.push(arr1[i])
        }
    }

    console.log(newarr);
    

}intersection([1, 2, 3, 4], [3, 4, 5, 6])