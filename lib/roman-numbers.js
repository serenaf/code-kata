module.exports = function(number) {
  var default_roman ={
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };

  var recursive = function(number, modulos, result) {
    if(modulos.length === 0) return result;

    var roman = modulos[0],
      count = number % roman,
      remaining = number - (roman * count);

    roman_string = "";
    for(var i = 0; i < count; i++) { roman_string += default_roman[roman]; }

    console.log(roman, count, roman_string, remaining);

    return recursive(remaining, modulos.splice(1, 1), result + roman_string);
  }

  return recursive(number, Object.keys(default_roman).reverse(), "");
}
