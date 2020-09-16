const hasDigit = pw => /[0-9]/.test(pw);
const hasLowercase = pw => /[a-z]/.test(pw);
const hasUppercase = pw => /[A-Z]/.test(pw);
const isLessThen8Chars = pw => pw.length <= 8;
const isNotBlank = pw => pw !== null;

const passwordVerifier = password => {
  const verifier = [
    hasDigit(password),
    hasLowercase(password),
    hasUppercase(password),
    isLessThen8Chars(password),
    isNotBlank(password),
  ];
  const conditionsTrue = verifier.filter(Boolean).length;
  console.log(conditionsTrue);
  if (conditionsTrue >= 3 && hasLowercase(password)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  passwordVerifier,
};
