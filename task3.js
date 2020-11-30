function twoNum(a, b) {
  if ((a == 65) || (b == 65) || ((a + b) == 65)) {
    return true;
  }
  return false;
}

console.log(twoNum(33, 32));
console.log(twoNum(43, 56));
