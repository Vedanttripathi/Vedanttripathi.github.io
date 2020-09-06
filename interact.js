document.querySelector("#contact-btn").addEventListener("click", function () {
  document.querySelector(".modal-bg").style.display = "grid";
  document.body.classList.add("stop-scrolling");
});

// document.querySelector(".modal-bg").addEventListener("click", function () {
//   this.style.display = "none";
// });

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".modal-bg").style.display = "none";
  document.body.classList.remove("stop-scrolling");
});
