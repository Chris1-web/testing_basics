function analyzeArray([...numbers]) {
  const string = numbers.filter((number) => {
    return typeof number === "string";
  });
  if (string.length !== 0) return "number array cannot contain string";
  const length = numbers.length;
  const average = numbers.reduce((prev, curr) => prev + curr, 0) / length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { average, min, max, length };
}

export default analyzeArray;
