import { bruteForce, linearTime } from "./bestbuyandsell";

describe('bruteForce', () => {
    test('Example One', () =>{
        const input= [7,1,5,3,6,4]
        const output =  5

        expect(bruteForce(input)).toBe(output);

    })

    test('Example Two', () =>{
        const input= [7,6,4,3,1]
        const output =  0

        expect(bruteForce(input)).toBe(output);

    })

})

describe('linearTime', () => {
    test('Example One', () =>{
        const input= [7,1,5,3,6,4]
        const output =  5

        expect(linearTime(input)).toBe(output);

    })

    test('Example Two', () =>{
        const input= [7,6,4,3,1]
        const output =  0

        expect(linearTime(input)).toBe(output);

    })

    test('Example Three', () =>{
        const input= [100, 120, 30, 5];
        const output =  20

        expect(linearTime(input)).toBe(output);

    })

})
