const { hasDigit } = require("./hasDigit.js");

test("Password has a digit", () => {
  expect(hasDigit("123")).toBe(true);
});

test("Password does not have a digit", () => {
  expect(hasDigit("qwerty")).toBe(false);
});
