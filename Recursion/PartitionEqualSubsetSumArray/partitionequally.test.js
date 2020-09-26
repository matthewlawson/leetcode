import partitionEqually from "./partitionequally";

describe('partitionequally', () => {
    test('examples one', () => {
        const input = [1, 5, 11, 5]
        const output = true
        expect(partitionEqually(input)).toBe(output);
    })
    test('examples three', () => {
        const input = [5, 5, 5, 5]
        const output = true
        expect(partitionEqually(input)).toBe(output);
    })
    test('example two', () => {
        const input = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,100];
        const output = false;
        expect(partitionEqually(input)).toBe(output);
    })
})
