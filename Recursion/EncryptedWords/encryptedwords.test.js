import { findEncryptedWord } from "./encryptedwords";

test("Example one", () => {
    var s_1 = "abc";
    var expected_1 = "bac";
    var output_1 = findEncryptedWord(s_1);
    expect(output_1).toBe(expected_1);

})

test("Example Two", () => {

    var s_2 = "abcd";
    var expected_2 = "bacd";
    var output_2 = findEncryptedWord(s_2);
    expect(output_2).toBe(expected_2);
})
test("example three", () => {
    expect(findEncryptedWord("abcxcba")).toBe("xbacbca")
})

test("Example Four", () => {
    expect(findEncryptedWord("facebook")).toBe("eafcobok")
})
  // Add your own test cases here
