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

test('supports custom delimiters specified at start', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws exception for negative numbers with all negatives listed', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});

// Edge cases
test('handles mix of commas, newlines, and custom delimiter', () => {
  expect(add("//;\n1;2\n3,4")).toBe(10);
});

test('returns 0 for only delimiters with no numbers', () => {
  expect(add(",,,\n\n")).toBe(0);
});

test('trims spaces around numbers', () => {
  expect(add(" 1 , 2 , 3 ")).toBe(6);
});

test('throws error for invalid non-numeric values', () => {
  expect(() => add("1,a,3")).toThrow("Invalid input: a");
});




