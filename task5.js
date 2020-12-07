function triangleArea(a, b , c) {
  var perimeter = (a +  b + c) / 2;
  var area =  Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
  return area;
}

console.log(triangleArea(10, 12 ,14));
