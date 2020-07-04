const DIRECTIONS = {
    RIGHT: 3,
    DOWN: 1,
    LEFT: 0,
    UP: 2,
}
export default function spiralMatrix(size) {
    const output = []; // size = 3 - set this up as we iterate...
    for(let i = 0; i < size; i++) {
        output[i] = [];
    }
    let direction = DIRECTIONS.RIGHT;
    let x = 0;
    let y = 0;
    let count = 1;
    // Do boundary checks
    while (count <= size * size) {
        if(!output[y]) {
            output[y] = [];
        }
        output[y][x] = count;

        count++;
        if (direction == DIRECTIONS.RIGHT) {
            x++;
            if (x == size || output[y][x] != undefined) {
                direction = DIRECTIONS.DOWN;
                y++; // Do a down move ...
                x--;
            }
        }
        else if (direction == DIRECTIONS.DOWN) {
            y++;
            if(y == size || output[y][x] != undefined) {
                direction = DIRECTIONS.LEFT;
                y--; x--;
            }
        }
        else if (direction == DIRECTIONS.LEFT) {
            x--;
            if(x < 0 || output[y][x] != undefined) {
                direction = DIRECTIONS.UP;
                x++; y--;
            }
        }
        else if (direction == DIRECTIONS.UP) {
            y--;
            // Stop before zero
            if(y == -1 || output[y][x] != undefined) {
                direction = DIRECTIONS.RIGHT;
                y++;
                x++;
            }
        }

    }

    return output;

}
