export default function addBinary(a, b) {
  if (a.length != b.length) {
    let difference = Math.abs(a.length - b.length);
    if (a.length < b.length) {
      a = frontPadWithZeros(a, difference);
    } else {
      b = frontPadWithZeros(b, difference);
    }
  }
  let carry = 0;
  let newBinaryNumber = "";
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == "0" && b[i] == "0") {
      if (carry == 0) {
        newBinaryNumber = prependZero(newBinaryNumber);
      } else {
        newBinaryNumber = prependOne(newBinaryNumber);
        carry = 0;
      }
    } else if (a[i] == "1" && b[i] == "1") {
      if (carry == 0) {
        newBinaryNumber = prependZero(newBinaryNumber);
        carry = 1;
      } else {
        newBinaryNumber = prependOne(newBinaryNumber);
        carry = 1;
      }
    } else if ((a[i] == "1" && b[i] == "0") || (a[i] == "0" && b[i] == "1")) {
      if (carry == 0) {
        newBinaryNumber = prependOne(newBinaryNumber);
      } else {
        newBinaryNumber = prependZero(newBinaryNumber);
        carry = 1;
      }
    }
  }

  // Carry remaining?
  if (carry == 1) {
    newBinaryNumber = prependOne(newBinaryNumber);
  }

  return newBinaryNumber;
}

function prependZero(number) {
  return "0" + number;
}
function prependOne(number) {
  return "1" + number;
}

function frontPadWithZeros(binaryNumber, howManyToPad) {
  return "0".repeat(howManyToPad) + binaryNumber;
}
