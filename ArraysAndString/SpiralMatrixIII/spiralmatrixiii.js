

export default function (R, C, r0, c0) {
    let moveDistance = 1;
    const outOfBounds = (current) => {
        return current[0] > R - 1 || current[0] < 0 || current[1] > C - 1 || current[1] < 0;
    }

    const isValid = (current) => {
        return current[0] < R && current[0] >= 0 && current[1] < C && current[1] >= 0;
    }

    let current = [r0, c0];
    let output = [current];
    while (output.length < R * C) {
        // Right
        let currentCol = current[1];
        for (let c = current[1] + 1; c <= currentCol + moveDistance; c++) {
            current = [current[0], c];
            if (!outOfBounds(current)) {
                output.push(current);
            }
        }

        // DOWN

        let currentRow = current[0]
        for (let r = currentRow + 1; r <= currentRow + moveDistance; r++) {
            current = [r, current[1]];
            if (!outOfBounds(current)) {
                output.push(current);
            }
        }

        moveDistance++;
        // Left
        currentCol = current[1];
        for (let c = currentCol - 1; c >= currentCol - moveDistance; c--) {
            current = [current[0], c];
            if (!outOfBounds(current)) {
                output.push(current);
            }
        }

        // UP
        currentRow = current[0]
        for (let r = currentRow - 1; r >= currentRow - moveDistance; r--) {
            current = [r, current[1]];
            if (!outOfBounds(current)) {
                output.push(current);
            }
        }
        moveDistance++;
    }

    return output;
};
