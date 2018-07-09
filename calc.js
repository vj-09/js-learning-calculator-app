var stack = []
var str1 = ""
var str2 = ""
var final = 0
var op = ""
var results = []
window.onkeyup = function(event) {
    let key = event.key;
    console.log("key", key);
    if (key == "+"){
    add()
    // console.log(str1)
    // console.log(op)
    // console.log(str2)
    }
    else if (key == "-"){
    sub()
    }
    else if (key == "*"){
      mul()
    }
    else if (key =="/"){
      div()
    }
    else if (key == "="){
      equal()
    }
    else{


    num(key)}
    // if ( key == 'W' ) {
    //     // 'W' key is pressed
    // } else if ( key == 'D' ) {
    //     // 'D' key is pressed
    // }
}
function num(key){
  str1 = str1 + key
  console.log(str1)
  console.log(op)
  console.log(str2)

  display()
}
function one(){
  str1 = str1 + 1
    display()
}
function two(){
  str1 = str1 + 2
  display()
}
function three(){
  str1 = str1 + 3
  display()
}
function four(){
  str1 = str1 + 4

  display()
}
function five(){
  str1 = str1 + 5
  display()
}
function six(){

  str1 = str1 + 6
  display()
}
function seven(){

  str1 = str1 + 7
  display()
}
function eight(){
  str1 = str1 + 8

  display()
}
function nine(){
  str1 = str1 + 9

  display()
}
function zero(){
  str1 = str1 + 0

  display()
}
function add(){
  str2 = str1
  str1 = ""
  op = "+"
  display()
}
function sub(){
  str2 = str1
  str1 = ""
  op = "-"
  display()
}
function mul(){
  str2 = str1
  str1 = ""
  op = "*"
  display()
}
function div(){
  str2 = str1
  str1 = ""
  op = "/"
  display()

}
function equal(){
  var x = +str2
  var y = +str1
  if (op == "+"){
    final = x+y
  }
  if (op == "-"){
    final = x-y
  }
  if (op == "*"){
    final = x*y
  }
  if (op == "/"){
    final = x/y
  }

  display1()
  }
function ref(){
  str1=""
  str2=""
  op = ""
  final=0
  display()
}
function display(){
  document.getElementsByName('output')[0].value= str2 + op + str1;

}
function display1(){
  results.push(str2 + op + str1 + "=" + final)
  localStorage.setItem("history", JSON.stringify(results));
  display2()
  document.getElementsByName('output')[0].value= str2 + op + str1 + "=" + final;

}


function display2(){
  if (results){
    // console.log("swswef");
    fLen1 = results.length;
    console.log(fLen1);
    text1 = "<ul>";
    for (i1 = 0; i1 < fLen1; i1++) {
        text1 += "<li>" + results[i1] + "</li>";
    }
    text1 += "</ul>";
    document.getElementById("resultt").innerHTML = text1;
  }

}

// console.log(results);
if (localStorage.history){
  // console.log("res",results);

  // console.log("his",localStorage.history);

  var stored = JSON.parse(localStorage.getItem("history"));
  results = results.concat(stored);
  // results = stored;
}
