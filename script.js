var css = document.querySelector("h3  ");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradint")




color1.addEventListener("input" , function(){
  console.lag(color1.value);
  body.style.background = "linear-gradint(to right," 
  + color1.value 
  + "," 
  + color2.value 
  +")";
})

color2.addEventListener("input" , function() {
    console.lag(color2.value);
})