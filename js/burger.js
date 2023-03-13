var burger = document.querySelector(".burger");
var hidden = document.querySelector(".hidden");
var closeCross = document.querySelector(".cross");

burger.addEventListener("click", function (event) {
  hidden.style.display = "block";
});

closeCross.addEventListener("click", function (event) {
  hidden.style.display = "none";
});
