function macht(x,n){

    if(n === 1){
        return x;
    }
    else{
        return x * macht(x,n-1);
    }
};
console.log(macht(5,4));
