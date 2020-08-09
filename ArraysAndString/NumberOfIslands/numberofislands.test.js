import numberofislands from "./numberofislands";

describe('numberofislands', () => {


    test("Example one", () => {

        const input =  [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
          ]
          const expectedOutput = 1;

          expect(numberofislands(input)).toBe(expectedOutput);

    })


})
