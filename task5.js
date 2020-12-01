var sidea = 3;
var sideb = 4;
var sidec = 5;
var perimeter = (sidea +  sideb + sidec) / 2;
var area =  Math.sqrt(perimeter * ((perimeter - sidea) * (perimeter - sideb) * (perimeter - sidec)));
console.log(area);
