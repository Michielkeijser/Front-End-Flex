const { passwordVerifier } = require("./passwordVerifier.js");

test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("henkie1")).toBe(true);
});

test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("1234a")).toBe(true);
});

test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("z")).toBe(true);
});
test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("henkie1234")).toBe(true);
});
test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("HENKhenk")).toBe(true);
});
test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("HENK33$")).toBe(false);
});
test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("1234")).toBe(false);
});
test("password verifier voldoet aan alle eisen", () => {
  expect(passwordVerifier("")).toBe(false);
});
