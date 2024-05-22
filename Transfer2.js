import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, onValue, ref, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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
    window.location.href = "Transfer.html"
});

let foundUser = JSON.parse(localStorage.getItem("foundUser"));
console.log(foundUser);
const balance = foundUser.acctBalance;

let user = JSON.parse(localStorage.getItem("UserInformation"));
console.log(user)
const userBalance = user.acctBalance;

let amount = 3000;
// let amount = document.getElementById("amount")
let tranPin = document.getElementById("tranPin")
let transFer = document.getElementById("transFer")

transFer.addEventListener('click', function () {
    if (amount < 100) {
        return alert ("Amount cannot be less than #100")
    } else if (amount > balance) {
        return alert ("Insufficient funds")
    }
    // else if (tranPin !== transactionPin) {
    //     return alert ("The transaction pin is incorrect")
    // }

    let newuserBalance = userBalance - amount;
    const newBalance = balance + amount;

    let UserInformation = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: user.password,
        acctNumber: user.acctNumber,
        acctBalance: newuserBalance,
    };
    localStorage.setItem("UserInformation", JSON.stringify(UserInformation))

    let newInformation = {
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        userName: foundUser.userName,
        email: foundUser.email,
        password: foundUser.password,
        acctNumber: foundUser.acctNumber,
        acctBalance: newBalance,
    }; 
                
    set(ref(db, "UserDetails/" + newInformation.userName), newInformation)
    .then(() => {
        alert("Transfer successful")
        window.location.href = "Dashboard.html"
    }) .catch((error) => {
        console.log(error)
        return alert("Transfer failed")
    });
})