function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // default delimiters
  let numStr = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // extract delimiter
    numStr = parts[1];
  }

  const parts = numStr.split(delimiter);
  return parts.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;
