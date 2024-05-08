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

let NG = document.getElementById("NG")
let balAnce = document.getElementById("balAnce");
let hidePass = document.getElementById("hidePass");
let showPass = document.getElementById("showPass");

hidePass.addEventListener('click', function () {
    balAnce.style.display = "none"
    hidePass.style.display = "none"
    showPass.style.display = "inline"
    NG.style.marginRight = "75px"
})

showPass.addEventListener('click', function () {
    balAnce.style.display = "inline"
    hidePass.style.display = "inline"
    showPass.style.display = "none"
    NG.style.marginRight = "0"
})

