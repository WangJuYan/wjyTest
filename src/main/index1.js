function sum(a, b) {
  // return a + b;
  if (a > b) {
    return a - b;
  } else {
    return a + b;
  }
}

function sub (a, b) {
  return a - b;
}
module.exports = {sum, sub};