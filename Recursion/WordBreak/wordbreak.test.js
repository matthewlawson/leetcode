import { wordBreak } from "./wordbreak";


test("Example one", () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true)
});

test("example two", () => {
    const s = "applepenapple"
    const wordDict = ["apple", "pen"];
    expect(wordBreak(s, wordDict)).toBe(true)
})

test("example three", () => {
    const s = "catsandog"
    const wordDict = ["cats","dog","sand","and","cat"]
    expect(wordBreak(s, wordDict)).toBe(false)
});

test("LC Example", () => {
    const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
    const wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    expect(wordBreak(s, wordDict)).toBe(false)
})
