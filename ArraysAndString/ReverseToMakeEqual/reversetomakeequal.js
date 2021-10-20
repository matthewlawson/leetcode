// Add any extra import statements you may need here


// Add any helper functions you may need here


export function areTheyEqual(array_a, array_b){
    // Write your code here
    // If we can reverse as many times as we like then any element can be in any position.
    // So the question becomes - are the arrays equal?
    if (array_a.length != array_b.length) {
      return false;
    }
    let elementCountA = makeElementCount(array_a);
    let elementCountB = makeElementCount(array_b);

    // Are they equal??
    for (const key in elementCountB) {
      elementCountA[key] --;
    }

    for (const key in elementCountA) {
      if(elementCountA[key] > 0) {
        return false;
      }
    }

    return true;
    // Sort and check ??

  }


  function makeElementCount(array) {
    let output = {};
    for(let i = 0; i < array.length; i++) {
      if(output[array[i]]) {
        output[array[i]]++;
      }
      else {
        output[array[i]] = 1;
      }
    }
    return output;
  }
