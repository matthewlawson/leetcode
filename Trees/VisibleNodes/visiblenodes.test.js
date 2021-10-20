import {TreeNode, visibleNodes} from "./visiblenodes"
test("example one", () => {
    var root1 = new TreeNode(8);
    root1.left = new TreeNode(3);
    root1.right = new TreeNode(10);
    root1.left.left = new TreeNode(1);
    root1.left.right = new TreeNode(6);
    root1.left.right.left = new TreeNode(4);
    root1.left.right.right = new TreeNode(7);
    root1.right.right = new TreeNode(14);
    root1.right.right.left = new TreeNode(13);
    var expected_1 = 4;
    var output_1 = visibleNodes(root1);
    expect(output_1).toBe(expected_1);
})


test("Example two", () => {
    var root2 = new TreeNode(10);
    root2.left = new TreeNode(8);
    root2.right = new TreeNode(15);
    root2.left.left = new TreeNode(4);
    root2.left.left.right = new TreeNode(5);
    root2.left.left.right.right = new TreeNode(6);
    root2.right.left = new TreeNode(14);
    root2.right.right = new TreeNode(16);
    var expected_2 = 5;
    var output_2 = visibleNodes(root2);
    expect(output_2).toBe(expected_2);

})
