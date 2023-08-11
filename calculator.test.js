import calculator from "./calculator";

// sum
test("return sum of numbers", () => {
  expect(calculator().sum(2, 3)).toBe(5);
  expect(calculator().sum(2, 3.2)).toBeLessThanOrEqual(5.2);
});

test("return sum of numbers sent as string", () => {
  expect(calculator().sum(2, "9")).toBe(11);
  expect(calculator().sum("10", "12")).toBe(22);
});

test("return error if string that can't be converted to number is sent", () => {
  expect(calculator().sum(2, "number")).toEqual(
    "Only numbers can be summed up"
  );
});

// subtraction
test("return subtraction of numbers", () => {
  expect(calculator().subtract(5, 1)).toBe(4);
  expect(calculator().subtract(2, 3)).toBe(-1);
  expect(calculator().subtract(2, 3.2)).toBeCloseTo(-1.2);
});

test("return subtraction of numbers sent as string", () => {
  expect(calculator().subtract(2, "9")).toBe(-7);
  expect(calculator().subtract("10", "12")).toBe(-2);
});

test("return error if string that can't be converted to number is sent", () => {
  expect(calculator().subtract(2, "number")).toEqual(
    "Only numbers can be subtracted"
  );
});

// divide
test("return division of numbers", () => {
  expect(calculator().divide(5, 1)).toBe(5);
  expect(calculator().divide(2, 3)).toBeLessThanOrEqual(0.7);
  expect(calculator().divide(2, 3.2)).toBeLessThanOrEqual(0.7);
});

test("return subtraction of numbers sent as string", () => {
  expect(calculator().divide(2, "9")).toBeLessThanOrEqual(0.3);
  expect(calculator().divide("10", "12")).toBeLessThanOrEqual(0.85);
});

test("return error if string that can't be converted to number is sent", () => {
  expect(calculator().divide(2, "number")).toBe("Only numbers can be divided");
});

// multiply
test("return multiplication of numbers", () => {
  expect(calculator().multiply(5, 1)).toBe(5);
  expect(calculator().multiply(2, 3)).toBe(6);
  expect(calculator().multiply(2, 3.2)).toBeCloseTo(6.4);
  expect(calculator().multiply(2, -5)).toBeCloseTo(-10);
});

test("return multiplication of numbers sent as string", () => {
  expect(calculator().multiply(2, "9")).toBe(18);
  expect(calculator().multiply("10", "12")).toBe(120);
});

test("return error if string that can't be converted to number is sent", () => {
  expect(calculator().multiply(2, "number")).toEqual(
    "Only numbers can be multiplied"
  );
});
