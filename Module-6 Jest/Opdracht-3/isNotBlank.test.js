const { isNotBlank } = require("./isNotBlank.js");

test("password is blank", () => {
  expect(isNotBlank(null)).toBe(false);
});

test("password is not blank", () => {
  expect(isNotBlank("a")).toBe(true);
});
