function calculator() {
  function sum(a, b) {
    if (
      typeof +a !== "number" ||
      typeof +b !== "number" ||
      Number.isNaN(+a) ||
      Number.isNaN(+b)
    )
      return "Only numbers can be summed up";
    return +a + +b;
  }
  function subtract(a, b) {
    if (
      typeof +a !== "number" ||
      typeof +b !== "number" ||
      Number.isNaN(+a) ||
      Number.isNaN(+b)
    )
      return "Only numbers can be subtracted";
    return +a - +b;
  }
  function divide(a, b) {
    if (
      typeof +a !== "number" ||
      typeof +b !== "number" ||
      Number.isNaN(+a) ||
      Number.isNaN(+b)
    )
      return "Only numbers can be divided";
    return +a / +b;
  }
  function multiply(a, b) {
    if (
      typeof +a !== "number" ||
      typeof +b !== "number" ||
      Number.isNaN(+a) ||
      Number.isNaN(+b)
    )
      return "Only numbers can be multiplied";
    return +a * +b;
  }
  return { sum, subtract, divide, multiply };
}

export default calculator;
