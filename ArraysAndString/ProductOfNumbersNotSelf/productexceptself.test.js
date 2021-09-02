import productExceptSelf from "./productexceptself";
import productExceptSelfConstantSpace from "./productexceptselfONspace";
import {productOfArrayExceptSelf2, productOfArrayExceptSelf3} from "./productofarrayexceptself";

describe("productexceptself", () =>{
    test("Example one", () => {
        const input =  [1,2,3,4]
        const output= [24,12,8,6]
        expect(productExceptSelf(input)).toEqual(output);
    })
})


describe("productexceptself with constant space", () =>{
    test("Example one", () => {
        const input =  [1,2,3,4]
        const output= [24,12,8,6]
        expect(productExceptSelfConstantSpace(input)).toEqual(output);
    })
})

describe("productexceptself - refresh", () =>{
    test("Example one", () => {
        const input =  [1,2,3,4]
        const output= [24,12,8,6]
        expect(productOfArrayExceptSelf2(input)).toEqual(output);
    })
})

describe("productexceptself - refresh with constant space", () =>{
    test("Example one", () => {
        const input =  [1,2,3,4]
        const output= [24,12,8,6]
        expect(productOfArrayExceptSelf3(input)).toEqual(output);
    })
})
