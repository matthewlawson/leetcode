import { leftMostColumnWithOne } from "./binarymatrixleftmostcolumnatleastone";
import { leftMostColumnWithOne as  leftMostColumnWithOneII} from "./binarymatrixleftmostcolumnatleastoneII";
import {BinaryMatrix} from "./BinaryMatrix";

describe("version one", () => {

    test.skip("Example one", () => {
        const i = [[0,0],[1,1]];
        const matrix = new BinaryMatrix(i);
        expect(leftMostColumnWithOne(matrix)).toBe(0)
    })


    test.skip("Example two", () => {
        const i =  [[0,0],[0,1]]
        const matrix = new BinaryMatrix(i);
        expect(leftMostColumnWithOne(matrix)).toBe(1)
    })
})

describe("version two", () => {

    test("Example one", () => {
        const i = [[0,0],[1,1]];
        const matrix = new BinaryMatrix(i);
        expect(leftMostColumnWithOneII(matrix)).toBe(0)
    })

    test("Example two", () => {
        const i =  [[0,0],[0,1]]
        const matrix = new BinaryMatrix(i);
        expect(leftMostColumnWithOneII(matrix)).toBe(1)
    })
})

