function checkLength (string, requiredLength) {
  return string.length <= requiredLength;
}

function isPalindrom(string) {
  const normalizedString = string.replaceAll(' ', '').toUpperCase();

  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString[i];
  }

  if (normalizedString === emptyString) {
    return true;
  }

  return false;
}

function isNumber (string) {
  string = string.toString();
  let onlyNumbers = '';

  for (let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string[i], 16))) {
      onlyNumbers += string[i];
    }
  }

  return onlyNumbers;
}
