function titleCase(str) {
    str = str.toLowerCase().split(' ');
    
    for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
   
    return str.join(' ');
}


var test = titleCase("I'm a little tea pot");



function titleCaseWithMap(str) {
  return str.toLowerCase()
            .split(' ')                                              .map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCase("I'm a little tea pot");


function titleCaseWithMapAndReplace(str) {
  return str.toLowerCase()
            .split(' ') 
            .map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");

testP(test);
function testP(i) {
    console.log(i);
}
