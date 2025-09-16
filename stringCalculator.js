function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(/,|\n/); // regex split by , or \n
  return parts.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;
