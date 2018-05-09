/**
 * getDogAgeInHumanYears()
 *
 * To get a dog's age in relation to human-years,
 * you need to multiply the number of years the dog
 * has lived by 7
 *
 * For example, if your dog is 3 years old,
 * then in human-years, your dog is 21.
 *
 * Write a method called getDogAgeInHumanYears() that
 *  gets a dog object's `.age` property and returns
 *  the human-years
 *
*/


let dog = {
  name: 'Abby',
  age: 7,
  legs: 4
}

/*
 * Write the logic '.getDogAgeInHumanYears()' method for `dog` below :
*/

dog.getDogAgeInHumanYears = function(age){
  // Your code here
  //console.log(this.age);
  var humage = this.age * 7;

  //console.log(humage);
  return humage;
}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert (typeof dog.getDogAgeInHumanYears === 'function')
console.assert (dog.getDogAgeInHumanYears() === 49)

// Instructor Evaluation
// checking `getDogAgeInHumanYears` method with other context with .call method
//   https://docs.microsoft.com/en-us/scripting/javascript/reference/call-method-function-javascript
console.assert( dog.getDogAgeInHumanYears.call({ age: 3, name: 'Jenny' }) === 21)
console.assert( dog.getDogAgeInHumanYears.call({ age: 10, name: 'Rufus' }) === 70)
console.assert( dog.getDogAgeInHumanYears.call({ age: 1, name: 'Mia' }) === 7)
