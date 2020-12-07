function sumOfTwoNum(a, b) {
  if ((a == 65) || (b == 65) || ((a + b) == 65)) {
    return true;
  }
  return false;
}

console.log(sumOfTwoNum(33, 32));
console.log(sumOfTwoNum(43, 56));
