

var form = document.querySelector("form");
    
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("clicked")
     window.location.href="password.html"
    


var data = {
  useremail: form.email.value,

}

console.log(data)
localStorage.setItem("userEmail",JSON.stringify(data));

})


document.querySelector("#mobile").addEventListener("click",mobile)

function mobile(event){
    event.preventDefault();
  window.location.href="mobile_sign.html"
}




document.querySelector("#creating").addEventListener("click",create)

function create(event){
    event.preventDefault();
    window.location.href="createAccount.html"
}



