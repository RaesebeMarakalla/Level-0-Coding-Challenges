function checkEquality(a, b) {
  if (a == 3 || b == 3) {
    var sumStr = (a + b).toString();
    for(var i=0; i < sumStr.length; ++i)
    {
      if(sumStr[i] == "3")
      {
        return true;
      }
    }
  }
  return false;
}
console.log(checkEquality(3,0));
console.log(checkEquality(674,35));
