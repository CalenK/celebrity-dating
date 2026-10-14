function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("efron").setAttribute("class", "hidden");
  document.getElementById("hall").setAttribute("class", "hidden");
  document.getElementById("saperstein").setAttribute("class", "hidden");
  document.getElementById("fox").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
  document.querySelector("form").removeEventListener("click", hideResultsAndError);
}

function advertisement() {
  alert("Have you been experincing aches, nausea, fatigue, well if your awnser to all or any of those questions are yes then go to www.mericalemedicine.com");
  document.querySelector("form").removeEventListener("submit", advertisement);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let efron = document.querySelector("div#efron");
  let hall = document.querySelector("div#hall");
  let saperstein = document.querySelector("div#saperstein");
  let fox = document.querySelector("div#fox");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResultsAndError();
    const gender = document.querySelector("input#genderInput").value;
    const sexuality = document.querySelector("input#sexualityInput").value;
    const hobby = document.querySelector("input#hobbyInput").value;

    if (gender && sexuality && hobby) {
      if (gender === "female" && (sexuality === "straight" || sexuality === "bisexual") && hobby === "outdoors") {
        document.getElementById("efron").removeAttribute("class");
      } else if (gender === "male" && (sexuality === "straight" || sexuality === "bisexual") && hobby === "journalism") {
        document.getElementById("hall").removeAttribute("class");
      } else if (gender === "male" && (sexuality === "gay" || sexuality === "bisexual") && (hobby === "singing" || hobby === "tapDancing")){
        document.getElementById("saperstein").removeAttribute("class");
      } else if (gender === "male" && (sexuality === "straight" || sexuality === "bisexual") && hobby === "writing") {
        document.getElementById("fox").removeAttribute("class");  
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }  
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  form.addEventListener("submit", advertisement);

  resetBtn.addEventListener("click", hideResultsAndError);
    document.getElementById("genderInput").value = null;
    document.getElementById("sexualityInput").value = null;
    document.getElementById("hobbyInput").value = null;
});