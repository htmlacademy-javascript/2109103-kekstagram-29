function checkLength (string, requiredLength) {
  return string.length <= requiredLength;
}

checkLength('string', 20);

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

isPalindrom('какая-то строка');

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

isNumber ('функция 2023');
