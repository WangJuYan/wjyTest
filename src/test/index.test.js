const fun = require('../main/index1.js');

test('sum', () => {
  expect(fun.sum(1, 2)).toBe(3);
});

test('test1: a>0，b>0:', () => {
  expect(fun.sub(5, 2)).toBe(3);
});

test('test2: a<0', () => {
  expect(fun.sub(-2, 5)).toBe(3);
});

test('test3: a=0', () => {
  expect(fun.sub(0, 5)).toBe(0);
});
