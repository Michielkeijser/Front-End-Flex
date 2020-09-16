const { isLessThen8Chars } = require("./isLessThen8Chars.js");

test("password length is less then 9", () => {
  expect(isLessThen8Chars("12345678")).toBe(true);
});

test("password length is over 9", () => {
  expect(isLessThen8Chars("123456789")).toBe(false);
});
