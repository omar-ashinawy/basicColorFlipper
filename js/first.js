const colors = ['Green', 'Red', 'Blue '/*, 'black'*/, 'White'];
let body = document.body;
let colorName = document.getElementById("span-color");
let btn = document.querySelector(".main-btn");
let transp = document.getElementById("transp");

btn.addEventListener("click", function () {
    let colorIndex = Math.floor(Math.random()*colors.length);
    let opacity = transp.value/100;
    let hexOpacity = Math.round(opacity * 255);
    let finalColor = "#";
    if (colorIndex == 0){
        finalColor+="00FF00";
    }
    else if(colorIndex == 1){
        finalColor+="FF0000";
    }
    else if(colorIndex == 2){
        finalColor+="0000FF";
    }
    else if(colorIndex == 3){
        finalColor+="FFFFFF";
    }
    if(opacity == 0){
        finalColor+="00";
    }
    else{
        finalColor+=hexOpacity.toString(16);
    }
    colorName.textContent = colors[colorIndex];
    body.style.backgroundColor = finalColor;
    colorName.style.color = finalColor.substr(0,7);
})
