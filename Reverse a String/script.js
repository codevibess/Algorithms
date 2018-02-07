
function reverseString(str) {
    
 return str.split('').reverse().join('');
}

reverseString("It`s reversed String");



/*Manual*/


function manualReverseString(str) {
    var result = '';
    
    for (var i = str.length-1; i >= 0; i--) {
        result += str[i];
        
    }
    console.log(result);
    return  result;
    
}
manualReverseString("It`s reversed String");

