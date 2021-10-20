import {areTheyEqual} from "./reversetomakeequal";

test("one", () => {
    var array_a_1 = [1, 2, 3, 4];
    var array_b_1 = [1, 4, 3, 2];
    var expected_1 = true;
    var output_1 = areTheyEqual(array_a_1, array_b_1);
    expect(output_1).toBe(expected_1);

})
test("two", () => {
    var array_a_2 = [1, 2, 3, 4];
    var array_b_2 = [1, 4, 3, 3];
    var expected_2 = false;
    var output_2 = areTheyEqual(array_a_2, array_b_2);
    expect(output_2).toBe(expected_2);


})
  // Add your own test cases here
