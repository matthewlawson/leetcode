/**
 * @param {string} path
 * @return {string}
 */
export function simplifypath(path) {
    // Split on '/'
    // Build up a stack of file names.
    // - ignore '.', ignore ''(from //)
    // '..' pops from stack
    // everyting else must be file - add to stack
    // join back together with slash.

    const pathArray = path.split("/");
    let outputStack = [];
    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] == ".") {
            continue;
        }
        if (pathArray[i] == "") {
            continue;
        }
        if (pathArray[i] == "..") {
            outputStack.pop();
            continue;
        }

        outputStack.push(pathArray[i]);

    }

    return `/${outputStack.join("/")}`;
};
