function largestNum(a, b, c)
{
  if (a >= b && a >= c)
  {
    return a;
  }
  else if (b >= c)
  {
    return b;
  }
  else
  {
    return c;
  }
}
console.log(largestNum(4, 7, 8));
