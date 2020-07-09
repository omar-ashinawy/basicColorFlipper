const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let body = document.body;
let colorName = document.getElementById("span-color");
let btn = document.querySelector(".main-btn");
let transp = document.getElementById("transp");
let colorIndex = 0;
btn.addEventListener("click", function () {
    let finalColor = '#';
    let opacity = transp.value/100;
    let hexOpacity = Math.round(opacity * 255);
    for(let i =0; i < 6; i++)
    {
        colorIndex = Math.floor(Math.random()*colors.length);
        finalColor += colors[colorIndex];
    }
    if(opacity == 0){
        finalColor+="00"
    }
    else{
        finalColor+=hexOpacity.toString(16);
    }
    colorName.style.color = finalColor.substr(0,7);
    body.style.backgroundColor = finalColor;
    colorName.textContent = finalColor;
}
)