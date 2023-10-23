const loadingAnimation = document.getElementById("loading-animation");

loadingAnimation.addEventListener("endEvent", function () {
  document.querySelector(".loader-container").style.display = "none";
});

loadingAnimation.addEventListener("beginEvent", function () {
  document.querySelector(".loader-container").style.display = "block";
});

loadingAnimation.beginElement();

setTimeout(function () {
  loadingAnimation.endElement();
}, 2000);
