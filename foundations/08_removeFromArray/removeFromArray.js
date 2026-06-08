const removeFromArray = function(array, ...nums) {

    return array.filter((num)=> !nums.includes(num));
};

console.log(removeFromArray([1, 2, 2, 4, 5], 2));
// Do not edit below this line
module.exports = removeFromArray;
