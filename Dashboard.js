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

let userDisplay = document.getElementById("userDisplay");
let imgOne = document.getElementById("imgOne");
let settIngs = document.getElementById("settIngs");

let user = JSON.parse(localStorage.getItem("UserInformation"));
// console.log(user)
const userName = user.userName;
userDisplay.innerHTML = `Hi, Mr. ${user.lastName}`;

const userRef = ref(db, `UserDetails/${userName}`)
onValue(userRef, (userInfo) => {
    const userdetails = userInfo.val()
    localStorage.setItem("UserInformation", JSON.stringify(userdetails))
    let balAnce = document.getElementById("balAnce");
    balAnce.innerHTML = userdetails.acctBalance; 
})

imgOne.addEventListener('click', function() {
    window.location.href = "Profile.html"
})

settIngs.addEventListener('click', function () {
    window.location.href = "Settings.html"
})

window.addEventListener('load', function () {
    showPass.style.display = "none"
})


let hidePass = document.getElementById("hidePass");
let showPass = document.getElementById("showPass");


hidePass.addEventListener('click', function () {
    balAnce.innerHTML = "*******"
    hidePass.style.display = "none"
    showPass.style.display = "inline"
})

showPass.addEventListener('click', function () {
    balAnce.innerHTML = user.acctBalance
    hidePass.style.display = "inline"
    showPass.style.display = "none"
})

let UserInformation = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    password: user.password,
    acctNumber: user.acctNumber,
    acctBalance: user.acctBalance,
    transactionPin: user.transactionPin
};

// console.log(UserInformation);
set(ref(db, "UserDetails/" + UserInformation.userName), UserInformation)
    .then(() => {
        // console.log(UserInformation)
    })
    .catch((error) => {
        alert("Error Occured while saving data");
    });

//Functions
//Transfer Funds

let transFer = document.getElementById("transFer")
transFer.addEventListener('click', function () {
    window.location.href = "Transfer.html"
})

//Airtime
let airTime = document.getElementById("airTime")

airTime.addEventListener('click', function () {
    window.location.href = "Airtime.html"
})

//Transaction History
let tranHistory = document.getElementById("tranHistory")

tranHistory.addEventListener('click', function () {
    window.location.href = "History.html"
})
