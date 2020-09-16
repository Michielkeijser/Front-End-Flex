const hasDigit = pw => /[0-9]/.test(pw);
const hasLowercase = pw => /[a-z]/.test(pw);
const hasUppercase = pw => /[A-Z]/.test(pw);
const isLessThen8Chars = pw => pw.length <= 8;
const isNotBlank = pw => pw !== null;

const passwordVerifier = pw => {
  const verifier = [
    hasDigit(pw),
    hasLowercase(pw),
    hasUppercase(pw),
    isLessThen8Chars(pw),
    isNotBlank(pw),
  ];
  const conditionsTrue = verifier.filter(Boolean).length;
  console.log(conditionsTrue);
  if (conditionsTrue >= 3 && hasLowercase(pw)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  passwordVerifier,
};
