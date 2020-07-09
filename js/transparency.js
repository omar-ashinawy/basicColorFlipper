let transp = document.getElementById("transp");
let btn = document.querySelector(".main-btn");

alphaValue = transp.textContent;
btn.addEventListener("click", function () {

    console.log(alphaValue);
})