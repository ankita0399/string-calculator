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

test('handles new line as delimiter along with commas', () => {
  expect(add("1\n2,3")).toBe(6);
});



