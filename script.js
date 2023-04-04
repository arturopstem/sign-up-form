const passwords = document.querySelectorAll("input[type='password']");
console.log(passwords);

passwords.forEach((el) => {
  el.addEventListener("keyup", comparePasswords);
});

function comparePasswords() {
  const password = passwords[0].value;
  const confirmPassword = passwords[1].value;
  if (password.length > 0 && confirmPassword.length > 0) {
    if (password !== confirmPassword) {
      passwords.forEach((el) => el.classList.add("error"));
      passwords.forEach((el) => el.classList.remove("success"));
      return;
    }
    if (password === confirmPassword) {
      passwords.forEach((el) => el.classList.remove("error"));
      passwords.forEach((el) => el.classList.add("success"));
      return;
    }
  } else {
    passwords.forEach((el) => el.classList.remove("error"));
    passwords.forEach((el) => el.classList.remove("success"));
  }
}
