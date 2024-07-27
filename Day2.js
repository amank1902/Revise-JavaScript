var a = 7, b = 6;
function addnum(a, b) {
    var add = a + b;
    console.log(add);
}
addnum(a,b);
var subtract = a - b;
console.log(subtract);
var mul = a * b;
console.log(mul);
var div = a / b;
console.log(div);
var mod = a % b;
console.log(mod);

var add1 = 5;
add1 += a;
console.log(add1);

var sub1 = 2;
sub1 -= b;
console.log(sub1);

if (a > b)
    console.log("a is greater");
else
    console.log("b is greater")

var c = 10, d = "9";
function checkGreater(c, d) {
    if (c >= d)
        console.log("c is greater than or equal to d");
    else
        console.log("d is greater than or equal to c")
}
checkGreater(c, d);

function dataType(c, d) {
    if (c === d)
        console.log("c is equal to d and has same data type")
    else if (c == d)
        console.log("c is equal to d")
    else
        console.log("c is not equal to d")
}
dataType(c,d);

function checkInt(a) {
    (a > 0) ? console.log("a is positive") : console.log("a is negative");
}
checkInt(a);