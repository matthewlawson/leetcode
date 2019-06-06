export default function(A) {
  // Brute force ...
  let output = A.map(value => value * value);

  // output.sort();
  return output.sort(function(a, b) {
    return a - b;
  }); // O (n log n)
}
