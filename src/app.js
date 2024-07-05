var email = document.getElementById("email")
var password = document.getElementById("password")
var creat = document.getElementById("creat")
var log = document.getElementById("log")

log.addEventListener("click", function(){
    var getData = JSON.parse(localStorage.getItem("user"))
    console.log(getData);
    if(getData.email1 == email.value && getData.password1 == password.value){
        alert("Login success")
        window.location.href = "./src/dashboard.html"
    }
    else if(getData.email1 != email.value && getData.password1 != password.value){
        alert("Your Email or Password is incorrect")
    }
    else if(getData.email1 != email.value ){
        alert("Your email is incorrect")
    }
    else if(getData.password1 != password.value ){
        alert("Your password is incorrect")
    }
    else if(email.value == "" && password.value ==  ""){
        alert("Please fill your Email or Password ")
    }
    else if(email.value == ""){
        alert("Enter a email")
    }
    else if(password.value ==  "" ){
        alert("Enter a Password")
    }
})
creat.addEventListener("click", function(){
    window.location.href = "./src/create.html"
})