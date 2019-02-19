var firstColor = document.getElementById ("firstColor");
var secondColor = document.getElementById ("secondColor");
var css = document.querySelector("h3");
var body = document.getElementsByTagName ("body")[0];

var setGradient =function(){	
	body.style.background="linear-gradient(to right, "+
	firstColor.value+" 0%, "+secondColor.value+" 100%)";
	css.textContent = body.style.background +";";
}
firstColor.addEventListener("input",setGradient );
secondColor.addEventListener("input", setGradient);
