function hasTargetSum(array, target) {
  // Write your algorithm here
  //create an object to keep track of any numbers
  const numbers = {};
  //loop through each number in the array
  for (let i = 0; i < array.length; i++) {
    let rem = target - array[i];
    //check if any key is the rem
    if (rem in numbers) return true;
    //add that number to the object incase of any other instance
    numbers[array[i]] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
