// Add any extra import statements you may need here


// Add any helper functions you may need here

function isLowerAlpha(character) {
    // Is the current character A-Z or a-z ?
    // Check char range is more reliable time complexity than regex
    const charCode = character.charCodeAt();
    return charCode <= "z".charCodeAt() && charCode >= "a".charCodeAt();
}

function isUpperAlpha(character) {
    const charCode = character.charCodeAt();
    return charCode <= "Z".charCodeAt() && charCode >= "A".charCodeAt();

}

function isNumeric(character) {
    const charCode = character.charCodeAt();
    // is in range 0 - 9;
    return charCode >= "0".charCodeAt() && charCode <= "9".charCodeAt();
}
export function rotationalCipher(input, rotationFactor) {
    // Write your code here
    // Loop over each  letter
    // If it is A-Z || a-z || 0-9
    //   => Get the character code
    //.  => Add rorational factor % 26 || Rotational Fctor % 10 to
    let output = "";
    for (let i = 0; i < input.length; i++) {
        const character = input[i]
        // console.log(character);
        if (isLowerAlpha(character)) {
            const distanceFromA = character.charCodeAt() - "a".charCodeAt();
            const factor = rotationFactor % 26;
            let newCharCode = ((distanceFromA + factor) % 26) + "a".charCodeAt();
            output += String.fromCharCode(newCharCode);
        }
        else if (isUpperAlpha(character)) {

            const distanceFromA = character.charCodeAt() - "A".charCodeAt();
            const factor = rotationFactor % 26;
            let newCharCode = ((distanceFromA + factor) % 26) + "A".charCodeAt();
            output += String.fromCharCode(newCharCode);
        }
        else if (isNumeric(character)) {
            const distanceFrom0 = character.charCodeAt() - "0".charCodeAt();
            const factor = rotationFactor % 10;
            let newCharCode = ((distanceFrom0 + factor) % 10) + "0".charCodeAt();
            // output += String.fromCharCode(newCharCode);
            output += String.fromCharCode(newCharCode);
        }
        else {
            output += character;
        }
    }
    return output;
}









