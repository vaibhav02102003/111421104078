// Get the email and password values from the URL query parameters
//const urlParams = new URLSearchParams(window.location.search);
const sign_mail = localStorage.getItem("semail");
const sign_pass = localStorage.getItem("spassword");

// Rest of your code using the email and pass variables
const lemail = document.getElementById("lemail");
const lpass = document.getElementById("lpassword");
const verifypss = document.getElementById("verify");
const btn = document.getElementById("login");
console.log(sign_mail);
console.log(sign_pass);


verifypss.onclick = () => {
if(lemail.value && lpass.value){
  if (sign_mail == lemail.value && sign_pass == lpass.value) {
      btn.style.display = "block";
      verifypss.style.backgroundColor="green";
      verifypss.innerHTML = "Matched ✓";
  } 
  else {
      btn.style.display = "none";
      verifypss.style.backgroundColor="red";
      verifypss.innerHTML = "Not matched ✕"

    lemail.style.animation = "invalid .5s 1";
    lemail.style.borderBottom = "2px solid red";

    lpass.style.animation = "invalid .5s 1";
    lpass.style.borderBottom = "2px solid red";
    
    }
  }
  else{
    lemail.style.animation = "invalid .5s 1";
    lemail.style.borderBottom = "2px solid red";

    lpass.style.animation = "invalid .5s 1";
    lpass.style.borderBottom = "2px solid red";
  }
}

lemail.onclick=()=>{
  verifypss.style.backgroundColor="#004badcf";
  verifypss.innerHTML = "verify password";
}

lpass.onclick=()=>{
  verifypss.style.backgroundColor="#004badcf";
  verifypss.innerHTML = "verify password";
  btn.style.display = "none";
}
