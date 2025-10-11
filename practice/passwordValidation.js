// Write a function  that takes a single parameter:

// the password must contain  at least one lowerCase letter, one uppercase letter, and one digit.
// the length of the password must be at least 8 characters.
// the function should return true if the password meets all the criteria otherwise, it should return false.

// constraints: 
// the input string password will contain only alphanumeric characters and punctuation marks

// const simplePasswordValidator = (password) => {
//   if (password.length >= 8) {
//     if (
//       password.match(/[a-z]/) &&
//       password.match(/[A-Z]/) &&
//       password.match(/[0-9]/)
//     ) {
//       return true;
//     }
//   }

//   return false;
// };

// or 

const simplePasswordValidator = (password) => {
  if (password.length >= 8) {
    if (
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /[0-9]/.test(password)
    ) {
      return true;
    }
  }

  return false;
};

console.log(simplePasswordValidator("dshaklAXsjsda232"))