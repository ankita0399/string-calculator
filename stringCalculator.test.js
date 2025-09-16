const add = require('./stringCalculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself for single input', () => {
  expect(add("1")).toBe(1);
});

test('returns sum for two comma-separated numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('returns sum for any amount of numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});


