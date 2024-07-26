var pass = document.getElementById("password");
var repass = document.getElementById("repassword");
var create = document.getElementById("createbtn");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var email = document.getElementById("email");

var fname= document.getElementById("Fname");

pass.onclick = () =>{
    document.getElementById("pws").style.display="block";
}
pass.onblur = () =>{
    document.getElementById("pws").style.display="none";
}
pass.onkeyup = ()=> {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(pass.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(pass.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(pass.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(pass.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

// ------------------------- for password verification------------------
fun = () =>{
  if(pass.value === repass.value ){
      if(pass.value!='')
        if(check.checked){
          create.style.display="block";
          
        }
        else{
          create.style.display="none";
        }
        repass.style.borderColor="black";
  }
  else{
    repass.style.borderColor="red"
    repass.style.animation = "invalid .5s 1";
  }
  //for login ------
  localStorage.setItem("semail", email.value);
  localStorage.setItem("spassword", pass.value);
  if(fname.value!==''){
  localStorage.setItem("username",fname.value);
  }
  else{
    localStorage.setItem("username",null);
  }
  //-------------
}

