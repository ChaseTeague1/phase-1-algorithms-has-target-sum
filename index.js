//declare function
function hasTargetSum(array, target){
//create for loop to iterate over array
  for(let i = 0; i < array.length; i++){
    //declare a variable to store a compliment number to the target
    let num = target - array[i];
    //create a for loop to iterate to continue over the rest of the numbers
    for(let j = i + 1; j < array.length; j++){
      //create and if statement that returns true or false if target sum is or isn't found in array
      if(array[j] === num) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime = O(n^2)
*/

/* 
  Add your pseudocode here 
  declare function
  create for loop to iterate over array
  declare a variable to store a compliment number to the target
  create a for loop to iterate to continue over the rest of the numbers
  create and if statement that returns true or false if target sum is or isn't found in array
*/

/*
  Add written explanation of your solution here
  creating a function called hasTargetSum that will take in 2 arguements one being an array and one being a target 
  number. The function will take in an array and begin to iterate over the numbers in said array
  until it finds 2 numbers which sum equals the target.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 4, 9, 17], 12));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([140, 101, 225, 78], 365));


}

module.exports = hasTargetSum;
