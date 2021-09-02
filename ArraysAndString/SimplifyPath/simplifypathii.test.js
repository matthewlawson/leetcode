import { simplifypath } from "./simplifypathii";

describe("simplifypath", () => {
    test("Example One", () => {
        const input = "/home/"
        const output = "/home";
        expect(simplifypath(input)).toBe(output);
    })

    test("Example Two", () => {
        const input = "/../"
        const output = "/";
        expect(simplifypath(input)).toBe(output);
    })

    test("Example Three", () => {
        const input = "/home//foo/"
        const output = "/home/foo";
        expect(simplifypath(input)).toBe(output);
    })

    test("Example four", () => {
        const input = "/a/./b/../../c/"
        const output = "/c";
        expect(simplifypath(input)).toBe(output);
    })

    test("example Five", () => {
        const input = "/a/../../b/../c//.//"
        const output = "/c"
        expect(simplifypath(input)).toBe(output);
    })

    test("example Six", () => {
        const input = "/a//b////c/d//././/.."
        const output = "/a/b/c"
        expect(simplifypath(input)).toBe(output);
    })
})
