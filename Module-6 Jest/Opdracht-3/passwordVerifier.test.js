const { passwordVerifier } = require("./passwordVerifier.js");

test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("a1Sfg")).toBe(true);
});

test("password verifier voldoet niet aan alle eisen", () => {
  expect(passwordVerifier("AAAA123")).toBe(false);
});
