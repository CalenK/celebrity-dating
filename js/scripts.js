function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("efron").setAttribute("class", "hidden");
  document.getElementById("hall").setAttribute("class", "hidden");
  document.getElementById("saperstein").setAttribute("class", "hidden");
  document.getElementById("fox").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const gender = document.querySelector("input#genderInput").value;
    const sexuality = document.querySelector("input#sexualityInput").value;
    const hobby = document.querySelector("input#hobbyInput").value;

    if (gender && sexuality && hobby) {
      if (gender === "female" && sexuality === "straight" || "bisexual" && hobby === "outdoors") {
        document.getElementById("efron").removeAttribute("class");
      } else if (gender === "male" && sexuality === "straight" || "bisexual" && hobby === "journalism") {
        document.getElementById("hall").removeAttribute("class");
      } else if (gender === "male" && sexuality === "gay" || "bisexual" && hobby === "singing" || "tapDancing"){
        document.getElementById("saperstein").removeAttribute("class");
      } else if (gender === "male" && sexuality === "straight" || "bisexual" && hobby === "writing") {
        document.getElementById("fox").removeAttribute("class");
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }  
  };
};