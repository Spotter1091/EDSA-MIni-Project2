const createForm = document.querySelector("#setup-form");
const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea[id="message"]');
const submitButton = document.getElementById("submit-info");

createForm.addEventListener("submit", (event) => {
  event.preventDefault();

   let output = "";

  inputFields.forEach((field) => {
    const textTitle = field.name;
    const inputValue = field.value;
    const charCount = inputValue.length;
    const wordCount = inputValue.split("").filter((word) => word !== "").length;
    const reversedString = inputValue.split("").reverse().join("");
    const upperCaseString = inputValue.toUpperCase();
    const lowerCaseString = inputValue.toLowerCase();

    
    output += `<strong>${textTitle}: ${inputValue}</strong> </br>
     Character count: ${charCount}<br>
     Word count: ${wordCount}<br>
     Reversed string: ${reversedString}<br>
     Uppercase string: ${upperCaseString}<br>
     Lowercase string: ${lowerCaseString}<br><br>`
  });

  const newTab = window.open();
  newTab.document.body.innerHTML = output;
});
