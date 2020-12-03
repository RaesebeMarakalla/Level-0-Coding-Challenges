function print_vowel(string) {

  function is_vowel(char) {
    char = char.toLowerCase();
    if (char == "a" || char == "e" || char =="i" || char == "o" || char == "u")
    {

      return true;
    }
    return false;
  }
  var vowels = "";

  for(var i=0; i<string.length; ++i)
  {
      if(is_vowel(string[i]))
      {
        vowels += string[i];
      }
  }
  console.log(vowels);
}
print_vowel("Anni");
