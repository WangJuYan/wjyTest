function sum(a, b) {
  return a + b;
}

function sub (a, b) {
  if (a > 0 && b > 0) {
    return a - b;
  } else if (a < 0 || b < 0) {
    return a + b;
  } else {
    return 0
  }
}
module.exports = {sum, sub};