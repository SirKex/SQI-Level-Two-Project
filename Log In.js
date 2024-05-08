import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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
const auth = getAuth(app);
const db = getDatabase(app);

logIn.addEventListener("click", function (ev) {
    ev.preventDefault();

    const email = document.getElementById("emailAddress").value;
    const password = document.getElementById("passWord").value;
    const userName = document.getElementById("userName").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Log In successful")

            const userRef = ref(db, `UserDetails/${userName}`)
            onValue(userRef, (userInfo) => {
                const userdetails = userInfo.val()
                localStorage.setItem("UserInformation", JSON.stringify(userdetails))
            })
            setInterval(() => {
                window.location.href = "Dashboard.html";
            }, 2000)
        })
})

