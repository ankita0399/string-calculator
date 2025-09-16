const add = require('./stringCalculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself for single input', () => {
  expect(add("1")).toBe(1);
});
