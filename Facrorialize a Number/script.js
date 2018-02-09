function factorialize(num) {
 if (num < 0) return -1;// There must be excepption
 if (num == 0 || num == 1) return 1;

    for (i = num-1; i>=1; i--) {
        num *= i;        
    }
    
    console.log(num);
    return num;
}
 factorialize(5);

function factorializeWithWhile(num) {
    result = num;
    while(num > 1){
        num--;
        result *=num;
    }
    console.log(result);
    return result;
}
factorializeWithWhile(5);

function recursionFactorialize(num) {
    
    if (num < 0) return -1;    
    else if (num == 0) return 1;
    else return (num * recursionFactorialize(num - 1));

} 