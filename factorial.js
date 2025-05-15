function factorial(n){
    
    let sum=0;
    let mul=1;
    
    for(let i=1;i<=n;i++){
        mul*=i;
        sum+=mul;
        
    }
    
    console.log(sum);
    
}factorial(5)