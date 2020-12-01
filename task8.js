function convertTime(num){
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}
console.log(convertTime(71));
console.log(convertTime(133));
console.log(convertTime(1441));
