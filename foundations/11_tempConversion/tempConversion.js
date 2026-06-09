const convertToCelsius = function(fahrenheit) {
  //x °F ≘ (x − 32) × ⁠5/9⁠ °C 

  const celsius = ((fahrenheit - 32) * (5/9));
  return Number.isInteger(celsius) ? 
    celsius :Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  //x °C ≘ (x × ⁠9/5⁠ + 32) °F 
  const fahrenheit = (celsius * 9/5 + 32);
  return Number.isInteger(fahrenheit) ? 
    fahrenheit : Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

