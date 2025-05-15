function paranthasis(s){

    let len=0;

    while(s.length!==len){
        len=s.length;
        let newStr="";

        for(let i=0;i<s.length;i++){
            let pair=s[i]+s[i+1];

            if(pair==="()" || pair==="{}" || pair==="[]"){
                i++;
            }
            else{
                newStr+=s[i]
            }
        }

        s=newStr;
    }

    if(s.length===0){
        console.log(true);
    }
    else{
        console.log(false);
    }

}paranthasis("()")