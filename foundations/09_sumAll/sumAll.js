const sumAll = function(a, b) {
    if((a || b) < 0 ||
        !Number.isInteger(a) ||
        !Number.isInteger(b)){
        return "ERROR"
    };

    b > a ? 
    [min, max] = [a, b] :  [max, min] = [a, b];

    let sum = 0;

    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};



// Do not edit below this line
module.exports = sumAll;
