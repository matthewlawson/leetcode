
import { removeDuplicates } from "./removeadjacentduplicatesinstring";

test("Example 1", () => {
    expect(removeDuplicates("abbaca")).toBe('ca')
})

// azxxzy
test("Example 2", () => {
    expect(removeDuplicates("azxxzy")).toBe('ay')
})


// azxxzy
test("Example 3", () => {
    expect(removeDuplicates("aaa")).toBe('a')
})
