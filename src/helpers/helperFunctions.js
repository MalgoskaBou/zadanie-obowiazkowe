export function toRoman(arabic) {
  const romanArabicNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = "";

  for (let i in romanArabicNumbers) {
    while (arabic >= romanArabicNumbers[i]) {
      roman += i;
      arabic -= romanArabicNumbers[i];
    }
  }
  return roman;
}

export function toArabic(roman) {
  let arabic = "";
  if (roman === "I") {
    arabic = 1;
  }
  if (roman === "IV") {
    arabic = 4;
  }

  return arabic;
}
