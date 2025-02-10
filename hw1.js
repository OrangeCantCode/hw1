const dateElem = document.getElementById("currentDate");
if (dateElem) {
  const now = new Date();
  dateElem.textContent = now.toLocaleDateString();
}

const rangeElem = document.getElementById("healthRange");
const healthVal = document.getElementById("healthValue");
if (rangeElem && healthVal) {
  healthVal.textContent = rangeElem.value;
  rangeElem.oninput = function() {
    healthVal.textContent = this.value;
  };
}

const regForm = document.querySelector("form");
if (regForm) {
  regForm.addEventListener("submit", function(e) {
    const pwd = document.getElementById("password");
    const pwd2 = document.getElementById("confirmPassword");
    if (pwd && pwd2) {
      if (pwd.value !== pwd2.value) {
        alert("Passwords do not match");
        e.preventDefault();
      }
    }
  });
}
