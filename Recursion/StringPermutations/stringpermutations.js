/**
 * @param {string} string
 * @return {string[]}
 */
export default (string) => {
    function permute(string, index, output) {
        if(index == string.length) {
            output.push(string);
            // Base case
        }
        for(let i = index; i < string.length; i ++) {
            string = swapStr(string, index, i);
            permute(string, index + 1, output);
            string = swapStr(string, index, i);
        }
    }
    let output = [];
    permute(string, 0, output);
    return output;
}

function swapStr(str, first, last){
    // console.log('swap', first, last);
    var arr = str.split('');
    swap(arr, first, last); // Your swap function
    const swappedString = arr.join('');
    // console.log(swappedString);
    return swappedString;
}

function swap(arr, first, last){
    var temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
}
