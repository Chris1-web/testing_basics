import capitalize from "./capitalize";

test("return first letter of string as capitalized", () => {
  expect(capitalize("james")).toBe("James");
});

test("return first letter of string as capitalized and remaining as lowercase", () => {
  expect(capitalize("doCTor")).toBe("Doctor");
});

test("only strings are allowed", () => {
  expect(capitalize(9)).toBe("Input has to be a string");
});

test("only strings are allowed", () => {
  expect(capitalize("9aef")).toBe("Input has to be a string");
});
