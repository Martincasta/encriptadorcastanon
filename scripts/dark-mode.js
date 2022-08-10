var btnSwitch = document.querySelector("#switch");
var input = document.querySelector("#textoOriginal");
var btnEncr = document.getElementById("btn-enc");
var btnDesc = document.getElementById("btn-desc");
var divEncr = document.getElementById("encr-div");
var divDesc = document.getElementById("desc-div");
var disclaimer = document.getElementById("disclaimer")
var imgLogo = document.getElementById("logo");
var vector = document.getElementById("vector");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  input.classList.toggle("active");
  btnEncr.classList.toggle("active");
  btnDesc.classList.toggle("active");
  divEncr.classList.toggle("active");
  divDesc.classList.toggle("active");
  disclaimer.classList.toggle("active");
  imgLogo.classList.toggle("active");
  vector.classList.toggle("active");

});
