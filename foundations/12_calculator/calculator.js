const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, num)=> sum + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((multiple, num)=> multiple * num, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let factorial = 1;

	for(let i = num; i > 0; i--){
    factorial *= i ; 
  };

  return factorial;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
