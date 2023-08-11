import analyzeArray from "./analyzeArray";

test("return calculated properties of an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("return calculated properties of an array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("return calculated properties of an array including string", () => {
  expect(analyzeArray([1, 2, 3, "4", 5])).toBe(
    "number array cannot contain string"
  );
});
