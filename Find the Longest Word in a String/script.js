function findLongestWord(str) {
    str = str.split(' ');
    console.log(str);
    var lenght = 0;
    for (var i = 0; i < str.length; i++) {
        if (lenght < str[i].length) {
        lenght = str[i].length;
            }
        
    }
    console.log(lenght);
    return length;
}

findLongestWord("The,  quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");

function findLongestWordSecondWay(str) { 

    str = str.split(' ');
//    add custom function to sort array
    str.sort(function(a, b){
        return b.length - a.length;
    });
    
    console.log(str[0].length);
}

findLongestWordSecondWay("The,  quick brown fox jumped over the lazy dog");
findLongestWordSecondWay("May the force be with you");
findLongestWordSecondWay("Google do a barrel roll");
findLongestWordSecondWay("What is the average airspeed velocity of an unladen swallow");
findLongestWordSecondWay("What if we try a super-long word such as otorhinolaryngology");




function findLongestWordWithReduce(str) { 
    var longestWord = str.split(' ')
                            .reduce(function(longest, currentWord) {
                                
                               if(currentWord.length > longest.length) return currentWord;
                                else return longest;
                                
                                }, "");
    
  return longestWord.length;  
}
var c = findLongestWordWithReduce("The,  quick brown fox jumped over the lazy dog");
