var num1 = 3;
var num2 = 5;
var result = num1 + num2;
console.log(result);


document.write(
    "The sum of "
    + num1 +
    " and "
    + num2 +
    " is "
    + result +
    "<br>"
);
// substraction

var num3 = 5;
var num4 = 3;
var result = num3 - num4;
console.log(result);


document.write(
    "The substraction of "
    + num3 +
    " and "
    + num4 +
    " is "
    + result +
    "<br>"

);

// multiplication
var num5 = 3;
var num6 = 5;
var result = num5 * num6;
console.log(result);


document.write(
    "The multiply of "
    + num5 +
    " and "
    + num6 +
    " is "
    + result +
    "<br>"
);

// division
var num7 = 5;
var num8 = 5;
var result = num7 / num8;
console.log(result);


document.write(
    "The division of "
    + num7 +
    " and "
    + num8 +
    " is "
    + result +
    "<br>"
);

var num9 = 10;
document.write("value after variable declaration is: "
    + num9
)

var initialValue = 5

document.write("<br> Initial Value: "
    + initialValue
)

initialValue++;

document.write("<br>Value after incremment: "
    + initialValue
)

var addition = initialValue + 7;

document.write("<br> value after addition: "
    + addition
)

addition--;

document.write("<br>value after decrement: "
    + addition
)

var division = 0/1;

document.write("<br> The Remainder is: "
    + division
)


var costOfOneTicket = 600
var numberOfTickets = 5

var costOfAllTickets = costOfOneTicket * numberOfTickets

document.write("<br> The cost of buying "
    + numberOfTickets +
    " Tickets is "
    + costOfAllTickets
);


document.write("<br><h1> Table of 4 </h1><br>")

for (var i = 1; i <= 10; i++) {
    document.write("4 x " + i + " = " + (4 * i) + "<br>");
}

var tempInCelcius = 32

var tempInFahrenheit = (tempInCelcius * 9/5) + 32;

document.write("<br><h1>Temprature Converter</h1>" + tempInCelcius + "°C is " + tempInFahrenheit+ "°F")

var tempInFahrenheit2 = 86

var tempInCelcius2 = (tempInFahrenheit2 - 32) * 5/9

document.write("<br>" 
    + tempInFahrenheit2 + "°F is "
    + tempInCelcius2 + "°C"
)


var priceOfItem1 = 650
var priceOfItem2 = 100
var quantity1 = 3
var quantity2 = 7
var shippingCharges = 100

var orderCost = (priceOfItem1 * quantity1) + (priceOfItem2 * quantity2) + shippingCharges

document.write("<br> <h1>Shopping Cart</h1>")

document.write("<br> Price of item 1 is " + priceOfItem1
    + "<br> Quantity of item 1 is " + quantity1
    + "<br> Price of item 2 is " + priceOfItem2
    + "<br> Quantity of item 2 is " + quantity2
    + "<br> Shipping Charges " + shippingCharges
    + "<br><br> The cost of your order is " + orderCost
)



var totalMarks = 980
var marksObtained = 804
var percentage = (marksObtained/totalMarks) * 100;

document.write("<br><h1>Marks Sheet</h1> <br><br> Total Marks: "
    + totalMarks +
    "<br> Obtained Marks: " + marksObtained +
    "<br> Percentage: " + percentage + "%"
)

var dollars = 10;
var riyals = 25;
var totalCurrency = (dollars * 104.80) + (riyals * 28)

document.write("<br><h1>Currency in PKR</h1> <br><br> Total Currency in PKR: " + totalCurrency)


var num10 = 2;
var calculation = num10 + 5 * 10 / 2;

document.write("<br> The number after calculation is: " + calculation)


var currentYear = 2016;
var birthYear = 1992;
var currentAge = currentYear - birthYear;

document.write("<br> <h1>Age Calculator</h1><br><br> Current Year: " +
    currentYear + " <br> Birth Year: " + birthYear
    + "<br> your Age is: " + currentAge
)

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);

document.write("<br> <h1>The Geometrizer</h1><br><br> Radius of a Circle: "
    + radius + "<br> The Circumference is: " + circumference +
    "<br> The Area is: " + area
)

var favouriteSnack = ("Chocolate Chip")
var age = 15;
var maximumAge = 65;
var snackPerDay = 3;
var totalSnack = (65 - 15) * 3;

document.write("<br><h1>The Lifetime Supply Calculator</h1><br><br>Favourite Snack: "
    + favouriteSnack + 
    "<br> Current Age: " + age + 
    "<br> Estimated Maximum Age: " + maximumAge +
    "<br> Amount of Snack Per Day: " + snackPerDay +
    "<br> You Will need " + totalSnack +
    " Chocolate Chip to last you until the ripe old age of " + maximumAge

)