
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector("form");
  
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.querySelector("#username").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      const confirmPassword = document.querySelector("#confirm_password").value;
  
      if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      alert("Registration successful!");
    });
  });
  