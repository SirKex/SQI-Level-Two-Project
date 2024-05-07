import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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

let loadIng = document.getElementById("loadIng")
let userDisplay = document.getElementById("userDisplay")
// let divLoad = document.getElementById("divLoad")
let acctNo = document.getElementById("acctNo")

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.addEventListener('load', function (ev) {
    ev.preventDefault()

    let user = JSON.parse(localStorage.getItem('UserInformation'));
    console.log(user)
    userDisplay.innerHTML = `Hello, Mr. ${user.lastName}`

    if (user.acctNumber > 8) {
        acctNo.innerHTML = user.acctNumber;
    }
    else if (acctNo.innerHTML < 8) {
        let user = JSON.parse(localStorage.getItem('UserInformation'));
        console.log(user)
        userDisplay.innerHTML = `Hello, Mr. ${user.lastName}`

        let firstInterval = setInterval(() => {
            let x = Math.floor((Math.random(0o0) * 999999999) + 1);
            acctNo.innerHTML = x;

            let UserInformation = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                acctNumber: x,
            };

            console.log(UserInformation);

            set(ref(db, "UserInfo/" + UserInformation.lastName), UserInformation)
                .then(() => {
                    alert("User Information saved")
                })
                .catch((error) => {
                    alert("Error Occured while saving data");
                });

            localStorage.setItem("UserInformation", JSON.stringify(UserInformation));
        }, 3000)


        let firstTimeout = setTimeout(() => {
            clearInterval(firstInterval)
        }, 3000)
    }

})

let nextBtn = document.getElementById("nextBtn")

nextBtn.addEventListener('click', () => {
    window.location.href = "Dashboard.html";
})