var rndmIntgrsA = []; // Array of random integers
var rndmIntgrsB = []; // Array of random integers
var aryLen = 10; // Length of arrays of random integers
var rslts = []; // Final array of elements that appear in both arrays
var flag = 0; // Flag to check if elements in final array are duplicated

for (ndx = 0; ndx < aryLen; ndx++) {  // Build 2 arrays of random integers
  rndmIntgrsA.push(parseInt(Math.random() * 10));
  rndmIntgrsB.push(parseInt(Math.random() * 10));
}
console.log(rndmIntgrsA, rndmIntgrsB);  // Display the arrays

for (indx = 0; indx < aryLen; indx++) {
  for (jdx = 0; jdx < aryLen; jdx++) {
      if (rndmIntgrsA[indx] == rndmIntgrsB[jdx]) {  // Is same num in both arrays?
        rslts.push(rndmIntgrsA[indx]);  // If so, put num in final array
          flag = 0;
          for (n = 0; n < rslts.length; n++) {
            if (rslts[n] == rndmIntgrsA[indx]) {  // Is match already in final array?
                    if (flag > 0) {  // Has match already been found in final array once?
                  rslts.pop();  // If so, remove it from final array
                        n = rslts.length; // stop checking
                } else flag++;  // set flag indicating match is in final array at least once
            }
          }
      }
  }
}
console.log(rslts); // display list of elements common to both arrays of random integers
