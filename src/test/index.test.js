const fun = require('../main/index1.js');

test('adds 1 + 2 to equal 3', () => {
  expect(fun.sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(fun.sum(5, 2)).toBe('a - b');
});

test('subs 5 - 2 to equal 3', () => {
  expect(fun.sub(5, 2)).toBe(3);
});