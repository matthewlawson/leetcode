/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
export function closestPointsToOrigin(points, K) {
    const answers = [];
    for(let i = 0; i< points.length; i++) {
        answers.push({
            originalPair: points[i],
            distance: Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)
        });
    }

    answers.sort((a, b) => {
        return a.distance - b.distance
    });

    return answers.map(answerItem => (answerItem.originalPair)).slice(0, K)
}
