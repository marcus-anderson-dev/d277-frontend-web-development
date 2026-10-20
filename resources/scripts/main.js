function validateEmail() {
  var email = document.getElementById("email").value;
  var emailConfirm = document.getElementById("confirmEmail").value;

  if (email !== emailConfirm) {
    alert("Emails must match.");
    return false;
  }

  alert("Form has been submitted.");
  return true;
}
