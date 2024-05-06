const emailEl = document.getElementById("email");
const emailErrorEl = document.getElementById("emailError");
const phonenoE1 = document.getElementById("phoneno");
const phonenoErrorE1 = document.getElementById("phonenoError")
const nameEl = document.getElementById("name");
const nameErrorEl = document.getElementById("nameError");
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

phonenoE1.addEventListener("blur", function(event) {
    let ph = event.target.value;
    if (ph.length != 10){
        phonenoErrorE1.textContent = "Enter exactly 10 numbers*";
    }else{
        phonenoErrorE1.textContent = "";
    }
})
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        nameErrorEl.textContent = "Reqired*";
    }else{
        nameErrorEl.textContent = "";
    }
})
passwordEl.addEventListener("blur", function(event) {
    if (event.target.value ===""){
        passwordErrorEl.textContent = "Reqired*";
    }else{
        passwordErrorEl.textContent = "";
    }
})
// const emailElValue = emailEl.value;
// const conformemailValue = conformemailEl.value;
// const nameValue = nameEl.value;
// const passwordElValue = passwordEl.value


// submitEl.onclick = function(){
//     if (emailElValue !=="" || conformemailValue !=="" || nameValue !=="" || passwordElValue !=="")
//         {
//         alert("USER REGISTERED SUCCESSFULLY");
//     }
//     else
//     {
//         alert("PLEASE FILL ALL FIELD'S");
//     }
// }
function validateForm() {
    let email = document.forms["myForm"]["email"].value;
    let phoneno = document.forms["myForm"]["phoneno"].value;
    let name = document.forms["myForm"]["name"].value;
    let password = document.forms["myForm"]["password"].value;
    if (email == "" || phoneno == "" || name == "" || password == "") {
      alert("All fields need to be filled");
      return false;
    }
    else
    {
        alert("User Registerd Successfully");
        alert("go to homeS");
    }
  }



