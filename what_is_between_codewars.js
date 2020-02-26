/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

function between(a, b) {
  let c = [];
  for (let i = a; i <= b; i++) {
    c.push(i);
  }
  return c;
}

console.log(between(1, 4));
