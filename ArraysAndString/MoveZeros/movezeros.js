// const input = [0, 1, 0, 3, 12];

export const moveZeros = function(inputArray) {
  let nonZeroCount = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
      inputArray[nonZeroCount] = inputArray[i];
      nonZeroCount++;
    }
  }

  while (nonZeroCount < inputArray.length) {
    inputArray[nonZeroCount] = 0;
    nonZeroCount++;
  }

  return inputArray;
};

export const moveZerosAgain = function(inputArray) {
  let lastNonZero = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
      inputArray[lastNonZero] = inputArray[i];
      lastNonZero++;
    }
  }

  for (let i = lastNonZero; i < inputArray.length; i++) {
    inputArray[i] = 0;
  }

  return inputArray;
};
