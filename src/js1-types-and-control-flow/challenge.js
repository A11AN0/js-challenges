/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

export const createFullName = () => {
  return firstName + " " + lastName;
};

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = () => {
  return Math.max (largeNumber1, largeNumber2);
};

// used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max as a reference

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
  return Number(addNumber1) + Number(addNumber2);
};

// used https://smallbusiness.chron.com/addition-html-35827.html as a reference.

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
  return password.length;
};

// used https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_string_length as a reference.

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
if (typeof thing === "string") { 
  return "This is a string";
} else if(typeof thing === "number") {
  return "This is a number";
} else if(typeof thing === "boolean") {
  return "This is a boolean";
} else {
  return "I don't know what this thing is";
}
};

// used https://stackoverflow.com/questions/4456336/finding-variable-type-in-javascript as a reference

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";


export const getIsValidOnNameTag = () => {
 
const IdealName = nameTagOption.charAt(0).toUpperCase().substring(0, 8) + nameTagOption.slice(1);
if (IdealName === nameTagOption) {
    return (true);
} else {
  return "Please enter a name with a capital first letter and maximum of 8 characters";
}

/* 0mg this one was kind of hard!, I used some trial and error when making this such as putting the
.substring(0, 8) before + nameTagOption.slice(1). For reference I used 
https://flexiple.com/javascript-capitalize-first-letter/
https://www.w3schools.com/jsref/jsref_substring.asp
*/

};

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
const stringToConvert = "14.45";

export const convertStringToNumber = () => {
  return Number (stringToConvert);

  // reference used https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
};

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
  return (/[A-Z]/g.test(stringWithUppercaseLetters));
};

/* This one was super tricky, I had to do alot of searching and use alot of references to wrap my head around regex
(which I'll probably be doing for awhile). 
https://www.youtube.com/watch?v=sXQxhojSdZM
https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js
http://www.rexegg.com/regex-quickstart.html#ref
*/


/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
  // Write your code here

const SnakeString = pascalCaseVariableName.split(/(?=[A-Z])/).join('_').toLowerCase();
return SnakeString;

/* 
references used include
https://www.codegrepper.com/code-examples/javascript/convert+pascal+case+to+snake+case+javascript
http://www.rexegg.com/regex-quickstart.html#ref
https://cs.lmu.edu/~ray/notes/regex/
*/

};
