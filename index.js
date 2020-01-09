// *************
// THE CHALLENGES
// *************

// ****************
// 1 - write a recursive function that will console log each element of an array
// ****************

// logItAll :: Array -> undefined
const logItAll = arr => {
  // Write solution here
};

// ****************
// 2 - write a function that will recursively add the numbers from 1 to n
// ****************

// recursiveSum :: Number -> Number
const recursiveSum = n => {
  // Write solution here
};

// console.log(recursiveSum(5)) // 15
// console.log(recursiveSum(10)) // 55
// console.log(recursiveSum(100)) // 5050



// ****************
// 3 - write a function that will return the nth fibonacci number
// ****************

// fib :: Number -> Number
const fib = n => {
  // Write solution here
};


// ****************
// 4 - define a recursive map function - with data last style arguments
// ****************

// map :: Function, Array -> Array
const map = (f, arr) => {
  // Write solution here
};

// ****************
// 5 - define a recursive reduce function - with data last style arguments :)
// this will be hard. Read the type signature. <3
// ****************

// // reduce :: Function, element, Array -> element
const reduce = (f, acc, arr) => {
  // Write solution here
};

// ****************
// 6 - define a recursive map function - using your reduce function!!
// ****************

const reduceMap = (f, arr) => {
  return reduce(/* Write solution here */);
};

module.exports = {
  logItAll,
  recursiveSum,
  map,
  fib,
  reduce,
  reduceMap
};
