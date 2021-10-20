import { Node, countOfNodes } from "./nodesinasubtree";
// Testcase 1
test("one", () => {
    var n_1 = 3, q_1 = 1;
    var s_1 = "aba";
    var node_1 = new Array(n_1 + 1);
    for (var i = 1; i <= n_1; i++) {
        node_1[i] = new Node(i);
    }
    var root1 = node_1[1];
    node_1[1].children = [node_1[2], node_1[3]];
    var queries_1 = [[1, 'a']];
    var output_1 = countOfNodes(root1, queries_1, s_1);
    var expected_1 = [2];
    expect(output_1).toEqual(expected_1);

})

test('two', () => {
    // Testcase 2
    var n_2 = 7, q_2 = 3;
    var s_2 = "abaacab";
    var node_2 = new Array(n_2 + 1);
    for (var i = 1; i <= n_2; i++) {
        node_2[i] = new Node(i);
    }
    var root2 = node_2[1];
    node_2[1].children = [node_2[2], node_2[3], node_2[7]];
    node_2[2].children = [node_2[4], node_2[5]];
    node_2[3].children = [node_2[6]];
    var queries_2 = [[1, 'a'], [2, 'b'], [3, 'a']];
    var output_2 = countOfNodes(root2, queries_2, s_2);
    var expected_2 = [4, 1, 2];
    expect(output_2).toEqual(expected_2);
})
