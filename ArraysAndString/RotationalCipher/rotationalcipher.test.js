import {rotationalCipher} from "./rotationalcipher";

test("example one", () => {
    var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
    expect(rotationalCipher("All-convoYs-9-be:Alert1.", 4)).toBe(expected_1);
})

test("example two", () => {
    var input_2 = "abcdZXYzxy-999.@";
    var rotationFactor_2 = 200;
    var expected_2 = "stuvRPQrpq-999.@";
    var output_2 = rotationalCipher(input_2, rotationFactor_2);
    expect(output_2).toBe(expected_2);
})
