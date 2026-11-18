// Question 1 
/*
let a = 5;
let b = 6;
let c = 7;
if (a>b && a>c) {
    console.log(a + " is the greatest");
}
else if (b>a && b>c) {
    console.log(b + " is the greatest");
}
else {
    console.log(c + " is the greatest");
}
*/


// Question 2
/*
let isLoggedIn = true;
let role = "admin";
if ( isLoggedIn === true) {
    if ( role === "admin") {
        console.log ("welcome, Admin")
    }
    else {
        console.log ("welcome, User")
    }
}
else {
    console.log("please, Login!")
}

*/


//Question 3
/*
let hour = 23;
if (hour >=5 && hour <=7) {
    console.log("Good Morning")
}
else if (hour >=12 && hour <=17) {
    console.log("Good Afternoon")
}
else  {
    console.log("Good evening")
}
*/


//Question 4
/*
let price = 49
let final_price = 0;
if (price >=100) {
    final_price = price - (0.2*price);
}
else if (price>50 && price<100) {
    final_price = price - (0.1*price);
}
else {
    final_price = price;
}

console.log(final_price);

*/

// Question 5
let year = 2017;
if (year % 4 === 0 && year % 100 !== 0){
    console.log("leap year")
}
else {
    console.log("not leap year")
}

