document.querySelector("#contact-btn").addEventListener("click", function () {
  document.querySelector(".modal-bg").style.display = "grid";
});

// document.querySelector(".modal-bg").addEventListener("click", function () {
//   this.style.display = "none";
// });

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".modal-bg").style.display = "none";
});
