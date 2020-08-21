/**
 * @param {string} path
 * @return {string}
 */
export default function(path) {
    // split on '/
    const splitPath = path.split("/");
    let stack = [];
    for(let i = 0; i < splitPath.length; i++) {
        let value = splitPath[i];
        if(value == "." || value == "") {
            // do nothing
        }
        else if(value == "..") {
            stack.pop();
        }
        else {
            stack.push(value);
        }
    }

    // Reassemble ...
    let simplifiedPath = "";
    if(stack.length == 0) {
        return "/"
    }
    for(let i = 0; i< stack.length; i++) {
        simplifiedPath += `/${stack[i]}`;
    }

    return simplifiedPath;
};
