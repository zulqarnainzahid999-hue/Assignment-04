// var a = 10;

// document.write("Result:<br> The value of a is: " + a
//     + "<br> ................................................<br><br><br>"
// )

// ++a;

// document.write("The value of ++a is: " + a
//     + "<br>Now the value of a is: " + a
//     +"<br><br><br>"
// )

// a++;

// document.write("The value of a++ is: " + a + 
//     "<br> Now the value of a is: " + a 
// )

// --a;

// document.write("<br><br><br> The value of --a is: " + a +
//     "<br> Now the value of a is: " + a
// )

// a--;

// document.write("<br><br><br> The value of a-- is: " + a +
//     "<br> Now the value of a is: " + a
// )


// var A=2,B=1;
// var result = --A - --B + ++B + B--;

// document.write("<br><br></br></br> A is: " + A + 
//     "<br> B is: " + B +
//     "<br> result is: " + result
// )


// var userName = prompt("Enter your Name")

// document.write("<br><br><br> Wellcome to Our Website " + userName)

// var num = prompt("Enter a number:");

// if (num === "") {
//     num = 5;
// } else {
//     num = Number(num);
// }

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " X " + i + " = " + (num * i) + "<br>");
// }



var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var obtained1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var obtained2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var obtained3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarksAll = totalMarks * 3;

var percentage1 = (obtained1 / totalMarks) * 100;
var percentage2 = (obtained2 / totalMarks) * 100;
var percentage3 = (obtained3 / totalMarks) * 100;

var percentage = (totalObtained / totalMarksAll) * 100;

document.write("<table>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtained1 + "</td>");
document.write("<td>" + percentage1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtained2 + "</td>");
document.write("<td>" + percentage2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtained3 + "</td>");
document.write("<td>" + percentage3 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + totalMarksAll + "</th>");
document.write("<th>" + totalObtained + "</th>");
document.write("<th>" + percentage + "%</th>");
document.write("</tr>");

document.write("</table>");