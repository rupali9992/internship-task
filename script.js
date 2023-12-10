document.querySelector("#account").addEventListener("click", function () {
  document.getElementById("registrationForm").style.display = "none";
  document.querySelector(".modal-backdrop").style.display = "block";
  document.querySelector("#GFG").style.display = "block";
  document.querySelector(".modal-dialog").style.display = "block ";
  document.querySelector(".show").style.opacity = "1";
  document.getElementById("loginForm").style.display = "block";
  // document.getElementById("registrationForm").style.display ="block";
});
function toggleForms(formId) {
  var loginForm = document.getElementById("loginForm");
  var registrationForm = document.getElementById("registrationForm");

  if (formId === "loginForm") {
    loginForm.classList.remove("hidden");
    registrationForm.classList.add("hidden");
  } else if (formId === "registrationForm") {
    loginForm.classList.add("hidden");
    registrationForm.classList.remove("hidden");
  }
}

function toggleForms(formId) {
  // Hide all forms
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registrationForm").style.display = "none";

  // Show the selected form
  document.getElementById(formId).style.display = "block";
}
