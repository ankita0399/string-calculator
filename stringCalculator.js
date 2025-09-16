function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // default delimiters
  let input = numbers;

  // Custom delimiter support
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].slice(2);
    delimiter = new RegExp(`[,\n${escapeRegExp(customDelimiter)}]`);
    input = parts.slice(1).join("\n"); 
  }

  // Split and trim
  const values = input.split(delimiter).map(v => v.trim()).filter(v => v !== "");

  if (values.length === 0) return 0;

  // Validate & convert to numbers
  const nums = values.map(v => {
    if (!/^[-]?\d+$/.test(v)) {
      throw new Error(`Invalid input: ${v}`);
    }
    return parseInt(v, 10);
  });

  // Negative check
  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed " + negatives.join(","));
  }

  // Sum
  return nums.reduce((sum, n) => sum + n, 0);
}

// Utility to escape special regex characters in custom delimiters
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = add;
