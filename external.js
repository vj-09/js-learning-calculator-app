// var results = []
//
// function myFunction() {
//   var e = document.getElementById("sel");
//   var strUser = e.options[e.selectedIndex].value;
//   // console.log(strUser)
//   var x = document.getElementById('num1').value;
//   var y = document.getElementById('num2').value;
//
//   switch (strUser) {
//     case "+":
//       var z = +x + +y;
//       results.push(x + "+" +y + "="+ z);
//
//       break;
//     case "-":
//       var z = +x - +y;
//
//       results.push(x + "-" +y + "="+ z);
//       break;
//     case "*":
//       var z = +x * +y;
//
//       results.push(x + "*" +y + "="+ z);
//       break;
//     case "/":
//       var z = +x / +y;
//
//       results.push(x + "/" +y + "="+ z);
//       break;
//   }
//   // document.getElementById("result").innerHTML = "result =" + z;
//   // document.getElementById("results").innerHTML = results;
//   var  text, fLen, i;
//
//   fLen = results.length;
//   text = "<ul>";
//   for (i = 0; i < fLen; i++) {
//     text += "<li>" + results[i] + "</li>";
//     }
//   text += "</ul>";
//   // document.getElementById("results").innerHTML = text;
//   // Store
//
//
//   // var  text1, fLen1, i1;
//   // var r = localStorage.history
//   // fLen1 = localStorage.history.length;
//   console.log(results)
//   // text1 = "<ul>";
//   // for (i1 = 0; i1 < fLen1; i1++) {
//   //     text1 += "<li>" + r[i1] + "</li>";
//   //   }
//   // text1 += "</ul>";
//   // document.getElementById("resultt").innerHTML = text1;
//   //
//   //
//   // localStorage.history = results
//   localStorage.setItem("history", JSON.stringify(results));
//   display();
//
// }
// function display(){
//   if (results){
//     // console.log("swswef");
//     fLen1 = results.length;
//     console.log(fLen1);
//     text1 = "<ul>";
//     for (i1 = 0; i1 < fLen1; i1++) {
//         text1 += "<li>" + results[i1] + "</li>";
//     }
//     text1 += "</ul>";
//     document.getElementById("resultt").innerHTML = text1;
//   }
//
// }
//
// // console.log(results);
// if (localStorage.history){
//   // console.log("res",results);
//
//   // console.log("his",localStorage.history);
//
//   var stored = JSON.parse(localStorage.getItem("history"));
//   results = results.concat(stored);
//   // results = stored;
// }
// // var names = [];
// // names[0] = prompt("New member name?");
// display();
//
// //...
