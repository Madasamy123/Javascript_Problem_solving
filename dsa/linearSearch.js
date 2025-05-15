function leanearSearch(arr,target){

   for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        console.log(i);
        return;
    }
   }

   console.log("The number is not in the array")


}leanearSearch([1,2,3,9,4,5],14)