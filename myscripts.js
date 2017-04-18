var one = "1";
var two = "2";
var three = "3";
var four = "4";
var five = "5";
var six = "6";
var seven = "7";
var eight = "8";
var nine = "9";
var zero = "0";
var plus = "+";
var total = "";
var calculation;
var calculation2;
var finalTotal;
var equation = "";
var equal = false;





function oneFunction(){
  //total = document.getElementById("one").innerHTML;
  total = total+one;
  document.getElementById("result").innerHTML = total;
}

function twoFunction(){
  total = total+two;
  document.getElementById("result").innerHTML = total;
}

function threeFunction(){
  total = total+three;
  document.getElementById("result").innerHTML = total;
}

function fourFunction(){
  total = total+four;
  document.getElementById("result").innerHTML = total;
}

function fiveFunction(){
  total = total+five;
  document.getElementById("result").innerHTML = total;
}

function sixFunction(){
  total = total+six;
  document.getElementById("result").innerHTML = total;
}

function sevenFunction(){
  total = total+seven;
  document.getElementById("result").innerHTML = total;
}

function eightFunction(){
  total = total+eight;
  document.getElementById("result").innerHTML = total;
}

function nineFunction(){
  total = total+nine;
  document.getElementById("result").innerHTML = total;
}

function zeroFunction(){
  total = total+zero;
  document.getElementById("result").innerHTML = total;
}

function plusFunction(){
  calculation = parseInt(total);
  total = "";
  equation = "add";
  //document.getElementById("result").innerHTML = calculation;
}

function minusFunction(){
  calculation = parseInt(total);
  total = "";
  equation = "sub";
}

function multiplyFunction(){
  calculation = parseInt(total);
  total = "";
  equation = "mul";
}

function divideFunction(){
  calculation = parseInt(total);
  total = "";
  equation = "div";
}

function equalFunction(){
  calculation2 = parseInt(total);
        if (equation == "add"){
          finalTotal = calculation+calculation2;
        } else if (equation == "sub"){
          finalTotal = calculation-calculation2;
        } else if (equation == "mul") {
          finalTotal = calculation*calculation2;
        } else {
          finalTotal = calculation/calculation2;
        }
        equal = true;
  document.getElementById("result").innerHTML = finalTotal;
}

function reset(){
  total = " ";
  document.getElementById("result").innerHTML = total;
}

//while (equal=true) {}
