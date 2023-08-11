import reverseString from "./reverseString";

test("return first letter of string as reverseStringd", () => {
  expect(reverseString("james")).toBe("semaj");
});

test("return first letter of string as reverseStringd and remaining as lowercase", () => {
  expect(reverseString("doCTor")).toBe("roTCod");
});

test("only strings are allowed", () => {
  expect(reverseString(9)).toBe("Input has to be a string");
});

test("only strings are allowed", () => {
  expect(reverseString("9aef")).toBe("fea9");
});
