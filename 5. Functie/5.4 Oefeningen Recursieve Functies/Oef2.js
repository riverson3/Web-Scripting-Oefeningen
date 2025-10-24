function fibonacho(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    else{
        return fibonacho(n-1) + fibonacho(n-2);
    }
}

console.log(fibonacho(22))