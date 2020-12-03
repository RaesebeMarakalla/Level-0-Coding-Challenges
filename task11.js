function commonLetter(str1, str2) {
  var list = [];
  for(var i = 0; i < str1.length; ++i){
    for(var j = 0; j < str2.length; ++j){
      if(str1[i] == str2[j]) {
        list.push(str1[i]);
      }
    }
  }
  return list.join(", ");
}
console.log("Common letters:", commonLetter("house", "computers"));
