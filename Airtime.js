import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBs8xzZ_NImJb45cGgURPSfsYP42hn5yNw",
    authDomain: "sqi-level-two-project.firebaseapp.com",
    databaseURL: "https://sqi-level-two-project-default-rtdb.firebaseio.com",
    projectId: "sqi-level-two-project",
    storageBucket: "sqi-level-two-project.appspot.com",
    messagingSenderId: "543903052576",
    appId: "1:543903052576:web:e276b5d2b7175fcabddd45",
    measurementId: "G-XSLF84G9DK"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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

    set(ref(db, "UserDetails/" + UserInformation.userName), UserInformation)
    .then(() => {
        window.location.href = "TranSuccess.html"
    }) .catch((error) => {
        console.log(error)
        return alert("Transfer failed")
    });
})