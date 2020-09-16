const { hasLowercase } = require("./hasLowercase.js");

test("password has lowercase", () => {
  expect(hasLowercase("a")).toBe(true);
});

test("password does not have lowercase", () => {
  expect(hasLowercase("A")).toBe(false);
});
