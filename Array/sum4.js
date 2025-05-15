//output=[24,12,8,6]

function calArray(arr){

    let result=[];
    let mul=1;
    
    for(let i=0;i<arr.length;i++){
       mul*=arr[i]
    }
      
    for(let j=0;j<arr.length;j++){
        let first=mul/arr[j]
        result.push(first);
    }
    
    console.log(result);
    
        
        
    }calArray([1,2,3,4])