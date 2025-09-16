function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  let numStr = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numStr = parts[1];
  }

  const parts = numStr.split(delimiter).map(n => parseInt(n, 10));

  const negatives = parts.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed " + negatives.join(","));
  }

  return parts.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
