const emailEl = document.getElementById("email");
const emailErrorEl = document.getElementById("emailError");
const passwordEl = document.getElementById("password");
const passwordErrorEl = document.getElementById("passwordError");
const submitEl = document.getElementById("submit");


emailEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        emailErrorEl.textContent = "Reqired*";
    }else{
        emailErrorEl.textContent = "";
    }
})

passwordEl.addEventListener("blur", function(event) {
    if (event.target.value ===""){
        passwordErrorEl.textContent = "Reqired*";
    }else{
        passwordErrorEl.textContent = "";
    }
})
function validateForm() {
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    if (email == "" || password == "") {
      alert("All fields need to be filled");
    //   return false;
    }
    else
    {
       
        alert("Login Succesful");
        alert("Go to home");
        window.location.href = "home.html"; 
    }
  }



