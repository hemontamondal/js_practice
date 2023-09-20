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

// document write output method
function writeOutput(){
	document.write('Hello World')
}

function writeOutput1(){
	document.write('I am trying to learn something.')
}

function documentWrite(){
	document.write("Hello World");
}

// window alert output method
function windowAlert(){
	window.alert("Hello World")
}

function windowAlert2(){
	window.alert("Hello World")
}

function windowAlert3(){
	window.alert("Hello World")
}

// console log
function consoleLog(){
	console.log("Helo World");
}

function consoleLog2(){
	console.log("Hello World");
}

// variable
var number1 = 10;
var number2 = 20;
var total = number1 + number2;
function variable(){
	document.getElementById('varh3').innerHTML = total;
}

let number3, number4, total1;
number3 = 10;
number4 = 30;
total1 = number3 + number4;
function variable1(){
	document.getElementById('var1h3').innerHTML = total1;
}

var number5, number6;
number5 = 40;
number6 = 30;
number5 += number6;
function variable2(){
	document.getElementById('var2h3').innerHTML = number5;
}

var number7 = 10;
var number8 = 20;
var total2 = number7 - number8;
function variable3(){
	document.getElementById('minus1').innerHTML = total2;
}

let number9, number10, total3;
number9 = 40;
number10 = 10;
total3 = number9 - number10;
function variable4(){
	document.getElementById('minus2').innerHTML= total3;
}

let number11, number12;
number11 = 40;
number12 = 30;
number11 -= number12;
function variable5(){
	document.getElementById('minus3').innerHTML= number11;
}


// demo text
document.getElementById('demoh3').innerHTML = 4+6;


function surpriceText(){
	document.getElementById('surprice').innerHTML = "How are you?";
}
// document.write('34')

// window.alert('Hello World')

// alert message
function alertMessage(){
	window.alert(4*5);
}

// window.print
function windowPrint(){
	window.print();
}
// window.print('jr')

// statement
document.getElementById('statementh2').innerHTML = "Hello Dolly";

let x, y, z;
x = 10;
y = 20;
z = x + y;
document.getElementById('statementh3').innerHTML = z;


let b, c, a;
b = 10;
c = 20;
a = b + c;
document.getElementById('demo1').innerHTML = "The value of a is  " +a+ " .";

// code block
function codeBlock(){
	document.getElementById('cblock1').innerHTML = "Hello World";
	document.getElementById('cblock2').innerHTML = "Hello There"
}

// arithmatic operator
document.getElementById('arithOpera').innerHTML = 10 * (50 + 10);

// js operator
let p, q;
p = 30;
q = 10;
document.getElementById('js_operator').innerHTML = p + q;


// js expresi0n
var f;
f = 20;
document.getElementById('ex').innerHTML = f * 10;

// Expressions compute to values.
document.getElementById('cvalues').innerHTML = "John" + " " + "Smith";
document.getElementById('cvalues').innerHTML = "Hemonta" + " " + "Mondal";
document.getElementById('cvalues').style.color = 'red';

// let keyword
let m, n;
m = 14 + 14;
n = m * 2;
document.getElementById('letkey').innerHTML = n;

// js case sensitive
let firstName, firstname;
firstName = "Hemonta";
firstname = "Mondal";
document.getElementById('casesen').innerHTML = firstName;


// js variables
const pi = 3.14;
let personName = "Hemonta Mondal";
let text = "Hello World";
document.getElementById('demoh').innerHTML = pi + "<br>" + personName + "<br>" + text;

let carName = "Volvo";
var rr
document.getElementById('cvariable').innerHTML = carName;
document.getElementById('qq').innerHTML = carName;

// js array
const cars = ["Volvo", " BMW", " Saab"];
cars[0] = " Toyota";
cars.push("Audi");
document.getElementById('array').innerHTML = cars;


const names = ["Hemonta", "Nayon", "Abanti"];
names[0] = "Nupur";
names.push("Hemonta");
document.getElementById('conName').innerHTML = names;

// assignment operator
var number1 = 10;
var number2 = 11;
var total = number1 + number2;
document.getElementById('assign').innerHTML = "The total value of 10 and 11 is : " + total;


var number1, number2, total;
number1 = 12;
number2 = 11;
total = number1 + number2;
document.getElementById('assign1').innerHTML = "The total value of 12 and 11 is : " + total;

let number21 = 10;
let number22 = 32;
let sum1 = number21 + number22;
document.getElementById('assign2').innerHTML = "The total value of 10 and 32 is : " + sum1;

let number23, number24, sum2;
number23 = 25;
number24 = 11;
sum2 = number23 + number24;
document.getElementById('assign3').innerHTML = "The total value of 25 and 11 is : " + sum2;

// js multiplication operator
var number1 = 12;
var number2 = 3;
var total = number1 * number2;
document.getElementById('multiplication').innerHTML = "The multiplication value of 12 & 3 is : " +  total;

// string operator
var text1 = "A";
var text2 = "B";
var result = text1 < text2;
document.getElementById('string').innerHTML = "Is A is less than B? " + result;

var number1 = 14;
var number2 = 23;
var result = number1 > number2;
document.getElementById('string1').innerHTML = "Is 14 is greater than 23? " + result;

// string addition
let fName = "Hemonta";
let lName = "Mondal";
let name = fName + " " + lName;
document.getElementById('st_add').innerHTML = name;
document.getElementById('st_add1').innerHTML = fName + " " + lName;
// document.getElementById('st_add2').innerHTML = "My Name is " + fName + " " + lName;
document.getElementById('st_add2').innerHTML = "My Name is " + name;

var text1 = "What a very ";
// text1 += "nice day.";
var text2 = "nice day."
text1 += text2;

document.getElementById('st_add3').innerHTML = text1;

// string operator
var number = 20 * 3;
var number1 = "14" + 2;
var textNumber = "Hello" + 10;
document.getElementById('numString').innerHTML = number + "<br>" + number1 + "<br>" + textNumber;


// arithmatic operator
let number27 = 40 + 37;
document.getElementById('ar_operator').innerHTML = number27;

var number = 23;
var number1 = 32;
var total = number + number1;
document.getElementById('ar_var2').innerHTML = total;


var number1 = 20
var number = (20 + 23) * number1;
document.getElementById('ar_var3').innerHTML = number;


var number1 = 12;
var number2 = 14;
var number = number1 + number2;
document.getElementById('addopera').innerHTML = "Addition Operator value" + " " + number;

var number1 = 32;
var number2 = 90;
var number = number2 - number1;
document.getElementById('subtopera').innerHTML = "Subtraction operator value" + " " + number;

var number1 = 23;
var number2 = 2;
var number = number1 * number2;
document.getElementById('multiopera').innerHTML = "Multiplication operator value" + " " + number;

var number1 = 34;
var number2 = 3;
var number = number1 / number2; 
document.getElementById('devideopera').innerHTML = "Division operator value" + " " + number;

var number1 = 79;
var number2 = 8;
var number = number1 % number2; 
document.getElementById('moduopera').innerHTML = "Modulus operator value" + " " + number;


var number1 = 20;
number1++;
var number = number1;
document.getElementById('incrementopera').innerHTML = "Increment Operator value " + " " + number;

var number1 = 23;
number1--;
var number = number1;
document.getElementById('decrementopera').innerHTML = "Decrement Operator value " + " " + number;

// operation precedence
document.getElementById('operation').innerHTML = 100 + 23 *3;
document.getElementById('operation1').innerHTML = (30 + 23) * 2;


// assignment operator
var number1 = 23;
var number2 = number1 + 10;
document.getElementById('assgnOper').innerHTML = "Value of number is: " + number2;

var number1 = 23;
number1 += 20;
document.getElementById('additionoper').innerHTML = "Value of number is: " + number1;

let nTitle = "Hemonta";
nTitle += " Mondal";
document.getElementById('additionoper1').innerHTML = nTitle;

// subtract operator
var number1 = 30;
number1 -= 11;
document.getElementById('subOper').innerHTML = "The value of this : " + number1;

// multiplication operator
var number1 = 12;
number1 *= 2;
document.getElementById('multiOper').innerHTML = "The value of this : " + number1;

// division operator
var number1 = 24;
number1 /= 2;
document.getElementById('diviOper').innerHTML = "The value is: " + number1;

// string length
const name2 = "Hemonta Mondal";
document.getElementById('strlenght').innerHTML =  name2;
document.getElementById('strlenght1').innerHTML = "The length of the string is :" + name2.length ;

// js events
function contentChange(){
	document.getElementById('content').innerHTML = Date();
}
