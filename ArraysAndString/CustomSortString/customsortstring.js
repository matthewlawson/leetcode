/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
// Use bucket sort ???
export default function(S, T) {
  let mapOfT = new Map();
  let orderOfS = new Map();
  for (let i = 0; i < S.length; i++) {
    orderOfS.set(S[i], i);
  }

  for (let letter of T) {
    if (orderOfS.has(letter)) {
      if (mapOfT.has(letter)) {
        let letterCount = mapOfT.get(letter);
        mapOfT.set(letter, letterCount + 1);
      } else {
        mapOfT.set(letter, 1);
      }
      // Remove the letter from the original string to maintain the rest of the string.
      T = T.replace(letter, "");
    }
  }

  let newString = "";
  for (let letter of S) {
    if (mapOfT.has(letter)) {
      newString = newString + letter.repeat(mapOfT.get(letter));
    }
  }
  return newString + T;
}
