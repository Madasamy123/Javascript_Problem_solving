function calcultor(n1,n2,simple){

    let result;

    if(simple=="+"){
        result=n1+n2 
    }
    else if(simple=="*"){
        result=n1*n2
    }

    else if(simple=="-"){
        result=n1-n2
    }
    else if(simple=="/"){
if(n2==0 || n1==0){
    result=0
}
else{
    result=n1/n2;
}

       
    }
    else{
        console.log("Invalid operation");
        return;
    }

    console.log(result);

}calcultor(20,0,"(")