function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("efron").setAttribute("class", "hidden");
  document.getElementById("hall").setAttribute("class", "hidden");
}

onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    hideResultsAndError();
    event.preventDefault();
    const gender = document.querySelector("input#genderInput");
    const sexuality = document.querySelector("input#sexualityInput");
    const color = document.querySelector("input#colorInput");
    const hobby = document.querySelector("input#hobbyInput");
    const personality = document.querySelector("input#personalityInput");
  };
};