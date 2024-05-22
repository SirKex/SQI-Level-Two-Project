let backArrow = document.getElementById("backArrow");

backArrow.addEventListener('click', function () {
    window.location.href = "Dashboard.html"
});

let airTel = document.getElementById("airTel");
let gLo = document.getElementById("gLo");
let mTn = document.getElementById("mTn");
let eTi = document.getElementById("eTi");

airTel.addEventListener('click', function () {
    alert ("You have selected Airtel")
})

gLo.addEventListener('click', function () {
    alert("You have selected GLO")
})

mTn.addEventListener('click', function () {
    alert("You have selected MTN")
})

eTi.addEventListener('click', function () {
    alert("You have selected 9mobile")
})

let user = JSON.parse(localStorage.getItem("UserInformation"));
// console.log(user)
let acctBalance = user.acctBalance;
let phoneNo = document.getElementById("phoneNo");
let airTime = document.getElementById("airTime");
let inp = document.getElementById("tranPin");
let topUp = document.getElementById("topUp");

topUp.addEventListener('click', function () {
    const tranPin = inp.value;

    if (phoneNo.length < 10) {
        return alert ("Phone number is not valid")
    } else if (airTime.value < 50) {
        return alert ("Amount cannot be less than #50")
    } else if (airTime.value > acctBalance) {
        return alert ("Insufficient funds")
    } else if (tranPin !== user.transactionPin) {
        return alert ("The transaction pin is incorrect")
    }

    let newBalance = acctBalance - airTime.value
    alert ("Your airtime purchase is successful")

     let UserInformation = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: user.password,
        acctNumber: user.acctNumber,
        acctBalance: newBalance,
        transactionPin: user.transactionPin
    };
    localStorage.setItem("UserInformation", JSON.stringify(UserInformation))
})