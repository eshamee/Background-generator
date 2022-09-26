var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

let colors = ["rgb(80, 203, 63)", "rgb(57, 66, 56)", "rgb(208, 77, 25)", "rgb(179, 120, 97)", "rgb(16, 54, 201)", 
"rgb(84, 104, 179)", "rgb(178, 69, 173)", "rgb(160, 131, 135)", "rgb(228, 147, 158)", "rgb(217, 96, 196)"];

function setGradient()  {
    body.style.background="linear-gradient(to right, "+ color1.value +", " + color2.value + ")";
    css.textContent = body.style.background + "";
  
}


function changeColor() {
     
        let random = Math.floor(Math.random()*colors.length);
        let color3 = colors[random];
        let rand =  Math.floor(Math.random()*colors.length);
        let color4 = colors[rand];
        gradient="linear-gradient(to left, "+ color3 +", " + color4 + ")";
        body.style.backgroundImage = gradient;
        document.getElementById("changecolor").innerHTML = gradient;
    
}


color1.addEventListener("input", setGradient );
color2.addEventListener("input", setGradient);
btn.addEventListener("click", changeColor)

