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
