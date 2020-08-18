import missingnumber from "./missingnumber";

describe('missing number', () => {
    test('example one', () => {
        const input = [3,0,1]
        const output = 2;

        expect(missingnumber(input)).toBe(output);
    })
    test('example two', () => {
        const input = [9,6,4,2,3,5,7,0,1]
        const output = 8;

        expect(missingnumber(input)).toBe(output);
    })

})
