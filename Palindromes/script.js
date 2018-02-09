function palindrome(str) {
    
    var re = /[\W_]/g; // here we choose all  characters what can appear in our string
    var lowRegStr = str.toLowerCase().replace(re, '');    
    var reverseStr = lowRegStr.split('').reverse().join('');
    
    return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");


/*Half-indexing (len/2) has benefits when processing large strings. 
We check the end from each part and divide the number of iterations inside the FOR loop by two.*/

function palindromeLoop(str) {
    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
  
    
    for (var i = 0; i<str.length/2; i++){
        console.log("From begin- " + str[i] + " " + str[str.length - 1 - i] + " -From the end");
        if(str[i] !== str[str.length - 1 - i]) return false;
       
    }
    return true;
}
var i = palindromeLoop("anona");

