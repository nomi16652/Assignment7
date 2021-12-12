
// 1. Write a js program to find maximum between two numbers.
function max() {
    var dom = document
    var fiNumber = Number(dom.getElementById("fnumber").value)
    var seNumber = Number(dom.getElementById("snumber").value)
    switch (fiNumber > seNumber) {
        case true:
            var some = dom.getElementById("result")
            some.innerHTML = fiNumber
            break;
        case false:
            var some1 = dom.getElementById("result")
            some1.innerHTML = seNumber
            break;
        default:
            // var same=dom.getElementById
            break;
    }
}

// 2. Write a js program to find maximum between three numbers.
function findThreeMax() {
    var dom = document
    var fValue = Number(dom.getElementById("fMax").value)
    var sValue = Number(dom.getElementById("sMax").value)
    var tValue = Number(dom.getElementById("tMax").value)

    var max = fValue


    if (sValue > max) {
        max = sValue
        var some = dom.getElementById("threeValueMax")
        some.innerHTML = max
    }
    else if (tValue > max) {
        max = tValue
        var some = dom.getElementById("threeValueMax")
        some.innerHTML = max
    }
    else {
        var some = dom.getElementById("threeValueMax")
        some.innerHTML = fValue
    }

}

// 3. Write a js program to check whether a number is negative, positive or zero.
function negPos() {
    var dom = document
    var value = Number(dom.getElementById("number").value)
    if (value > 0) {
        var pos = dom.getElementById("Pos&Neg")
        pos.innerHTML = "Positive"

    }
    else if (value < 0) {
        var neg = dom.getElementById("Pos&Neg")
        neg.innerHTML = "Negative"
    }
    else {
        var zero = dom.getElementById("Pos&Neg")
        zero.innerHTML = "Zero"
    }
}

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
function checkDivisible() {

    var dom = document
    var value = Number(dom.getElementById("divisible").value)
    if (value % 5 == 0 && value % 11 == 0) {
        var fiveEleven = dom.getElementById("check")
        fiveEleven.innerHTML = "Number is Divisible by 5 and 11"

    }
    else if (value % 5 == 0) {
        var five = dom.getElementById("check")
        five.innerHTML = "Number is Divisible only 5 "

    }
    else if (value % 11 == 0) {
        var eleven = dom.getElementById("check")
        eleven.innerHTML = "Number is Dividible only 11"


    }
    else {
        var non = dom.getElementById("check")
        non.innerHTML = "Number is Not be Divisible by 5 and 11"
    }

}

function evenOdd() {
    var dom = document
    var inputEvenOdd = Number(dom.getElementById("evenOdd").value)
    if (inputEvenOdd % 2 == 0) {
        var even = dom.getElementById("resultEvenOdd")
        even.innerHTML = "Value is Even"

    }
    else {
        var odd = dom.getElementById("resultEvenOdd")
        odd.innerHTML = "Value is Odd"
    }

}

function LeapYear() {
    var dom = document
    var getYear = Number(dom.getElementById("leap").value)

    if ((getYear % 4 == 0) &&  (getYear % 100 != 0) || (getYear % 400 == 0) ) {
        var leap = dom.getElementById("checkLeap")
        leap.innerHTML = "is a Leap Year"

    }
    else{
        var notLeap=dom.getElementById("checkLeap")
        notLeap.innerHTML=getYear+' '+"is not leap year"
    }
}


function characterFunction() {
    var dom=document
}