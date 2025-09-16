function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(",");
  if (parts.length === 1) {
    return parseInt(parts[0], 10);
  }

  return parts.reduce((sum, num) => sum + parseInt(num, 10), 0);
}


module.exports = add;
