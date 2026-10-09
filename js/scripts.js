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
      // if (gender === "female" && sexuality === "straight" || hobby === "outdoors") {
      //   document.getElementById("efron").removeAttribute("class");
      // } else if (gender === "male" || sexuality === "straight" && hobby === "journalism") {
      //   document.getElementById("hall").removeAttribute("class");
      // } else if (gender === "male" && sexuality === "gay" && hobby === "singing" || "tap dancing") {
      //   document.getElementById("saperstein").removeAttribute("class");
      // } else if (gender === "male" && sexuality === "bisexual" || hobby === "writing") {
      //   document.getElementById("fox").removeAttribute("class");
      // }
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }  
  };
};