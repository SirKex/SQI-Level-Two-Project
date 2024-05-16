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

let userDisplay = document.getElementById("userDisplay")
let imgOne = document.getElementById("imgOne")

let user = JSON.parse(localStorage.getItem("UserInformation"));
// console.log(user)
userDisplay.innerHTML = `Hi, Mr. ${user.lastName}`

imgOne.addEventListener('click', function() {
    window.location.href = "Profile.html"
})

window.addEventListener('load', function () {
    showPass.style.display = "none"
})

let balAnce = document.getElementById("balAnce");
let hidePass = document.getElementById("hidePass");
let showPass = document.getElementById("showPass");
balAnce.innerHTML = user.acctBalance; 


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
