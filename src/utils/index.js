import { jwtDecode } from 'jwt-decode';


//returns either true or false
export function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export const validatePassword = (password) => password.length <6 ? "INVALID" : "VALID"

export const validateLoginDetails = (details) => {
  if (validateEmail(details.email) && validatePassword(details.password) === "VALID") return "VALIDATED"
  return "INVALIDATED"
}

export const validateFirstName = (firstName) => firstName.length <3 ? "INVALID" : "VALID"

export const validateLastName = (lastName) => lastName.length <3 ? "INVALID" : "VALID"

export const validateConfirmPassword = (confirmPassword, password) => confirmPassword !== password ? "INVALID" : "VALID"

export const validateRegisterDetails = (details) => {
  if (validateEmail(details.email) && validatePassword(details.password) === "VALID" && validateFirstName(details.firstName) === "VALID" && validateLastName(details.lastName) === "VALID" && validateConfirmPassword(details.confirmPassword) === "VALID") return "VALIDATED"
  return "INVALIDATED"
}

//Trying to extract user name to customize welcome message to the user logged in. No username in this info but user id is there
//to get user id return decoded.id. But how do I somehow get user name from the user Id? another user call to the db to return user details?
//This was solved by adding firstName to the userDetails object in loginRouter post function on the backend.
export const getUserDetailsFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded

  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }


};
