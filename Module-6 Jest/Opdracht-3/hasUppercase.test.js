const { hasUppercase } = require("./hasUppercase.js");

test("password has uppercase", () => {
  expect(hasUppercase("A")).toBe(true);
});

test("password does not have uppercase", () => {
  expect(hasUppercase("a")).toBe(false);
});
