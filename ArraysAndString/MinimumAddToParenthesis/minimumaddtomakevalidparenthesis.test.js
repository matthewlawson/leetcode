import { minAddToMakeValid3 as minAddToMakeValid } from "./minimumaddtomakevalidparenthesis";

test("Example one", () => {
    expect(minAddToMakeValid("())")).toBe(1)
})

test("Example two", () => {
    expect(minAddToMakeValid("(((")).toBe(3)
})
