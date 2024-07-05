var email1 = document.getElementById("email1")
var password1 = document.getElementById("password1")
var userName = document.getElementById("name")
var creat1 = document.getElementById("creat1")
var log1 = document.getElementById("log1")

creat1.addEventListener("click", function(){
    var userData = {
        userName: userName.value,
        email1: email1.value,
        password1: password1.value 
    }
    var save = localStorage.setItem("user", JSON.stringify(userData))
    if(email1.value == "" || password1.value == "" || userName == "")(
        alert("Please fill your inputs")
    )
    else{
        window.location.href = "../index.html"
    }
})

log1.addEventListener("click", function(){
    if (email1.value == "" || password1.value == "" || userName == "") {
        alert("Please fill your inputs")
    }else if(creat1.value == "Create Account"){
        window.location.href = "../index.html"
    }
    // }else{
    //     alert("plz click create acc btn for create acc")
    // }
    // window.location.href = "../index.html"
})