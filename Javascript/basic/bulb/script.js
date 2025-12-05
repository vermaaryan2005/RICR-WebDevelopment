function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}
function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
function blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}
function red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

const userColor = document.getElementById("color");

userColor.addEventListener("change", () => changeBulbColor(userColor.value));

function changeBulbColor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}



function SB_Control() {
  const btn = document.getElementById("SB_btn");
  if (btn.innerText === "on") {
    document.getElementById("SB_btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("on");
  } else {
    document.getElementById("SB_btn").innerText = "on";
    document.getElementById("smartBulb").classList.remove("on");
  }
}

function SB_control2() {
  document.getElementById("smartBulb").classList.toggle("on");
}


document.getElementById("c1").addEventListener("mouseenter",()=>{
  fillColorur("violet");
})
document.getElementById("c1").addEventListener("mouseleave",()=>{
  fillColorur("white");
})
function fillColorur(color){
  console.log(color);
  document.getElementById("rainbowbulb").style.backgroundColor = color;
}

document.getElementById("c2").addEventListener("mouseenter",()=>{
  fillColorur("indigo");
})
document.getElementById("c2").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c3").addEventListener("mouseenter",()=>{
  fillColorur("blue");
})
document.getElementById("c3").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c4").addEventListener("mouseenter",()=>{
  fillColorur("green");
})
document.getElementById("c4").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c5").addEventListener("mouseenter",()=>{
  fillColorur("yellow");
})
document.getElementById("c5").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c6").addEventListener("mouseenter",()=>{
  fillColorur("orange");
})
document.getElementById("c6").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c7").addEventListener("mouseenter",()=>{
  fillColorur("red");
})
document.getElementById("c7").addEventListener("mouseleave",()=>{
  fillColorur("white");
})