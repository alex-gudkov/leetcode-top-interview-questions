/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let rest = 0;
  let i = digits.length;

  while (i--) {
    digits[i]++;
    rest = digits[i] / 10;
    digits[i] %= 10;

    if (rest !== 1) {
      break;
    }
  }

  if (rest === 1) {
    digits.unshift(1);
  }

  return digits;
}

function plusOne_2(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
}

const digits = [9, 9, 9];

console.log(plusOne_2(digits));
