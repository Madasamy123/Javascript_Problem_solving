
function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i;
        
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }

     if(min!==i){
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp
     }

    }

    console.log(arr)

}selectionSort([2,7,3,1,4,18,5,9,6])