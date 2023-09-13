// text change
function textChange(){
	document.getElementById('text_h3').innerHTML="Hello World";
}

// date change
function dateChange(){
	document.getElementById('showdate').innerHTML = Date();
}

// date change
function dateChange1(){
	document.getElementById('date').innerHTML = Date();
}

// date change
function changeDate2(){
	document.getElementById('date2').innerHTML = Date();
}

// bulb on/off
function bulbOn(){
	document.getElementById('img').src ="images/on.gif";
}

function bulbOf(){
	document.getElementById('img').src ="images/off.gif";
}

function lightOff(){
	document.getElementById('img1').src ="images/off.gif";
}

function lightOn(){
	document.getElementById('img1').src ="images/on.gif";
}

// text font change
function fontChange(){
	document.getElementById('textfont').style.fontSize = "40px";
}

// text color change
function colorChange(){
	document.getElementById('textcolor').style.color = "gray";
}

// show/hide text
function show(){
	document.getElementById('sh_text1').style.display = "block";
}
function hide(){
	document.getElementById('sh_text').style.display = "none";
}

function hide1(){
	document.getElementById('sh_text2').style.display = "none";
}
function show1(){
	document.getElementById('sh_text2').style.display = "block";
}