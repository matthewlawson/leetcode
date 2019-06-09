export default function(points, K) {
  let answers = {};
  points.forEach(point => {
    let answer = Math.pow(point[0], 2) + Math.pow(point[1], 2);
    if (!answers[answer]) {
      answers[answer] = [];
    }
    answers[answer].push(point);
  });

  let returnValues = [];
  let keys = Object.keys(answers);

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < answers[keys[i]].length; j++) {
      returnValues.push(answers[keys[i]][j]);
      K--;
      if (K <= 0) {
        return returnValues;
      }
    }
  }

  return returnValues;
}
