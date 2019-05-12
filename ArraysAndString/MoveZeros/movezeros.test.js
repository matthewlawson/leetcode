import { moveZeros, moveZerosAgain } from "./movezeros";
describe("MoveZero tests", () => {
  test("supplied example", () => {
    const input = [0, 1, 0, 3, 12];
    const output = [1, 3, 12, 0, 0];

    expect(moveZeros(input)).toEqual(output);
  });

  test("Second attempt", () => {
    const input = [0, 1, 0, 3, 12];
    const output = [1, 3, 12, 0, 0];

    expect(moveZerosAgain(input)).toEqual(output);
  });
});
