
function validation() {
  var name = document.getElementById("Username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var Regexname = /^[A-Za-z]{3,20}/;
  var Regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var Regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  var errorNum = 0;


  if (Regexname.test(name)) {
    document.getElementById("name_err").innerHTML = "";
  } else {
    document.getElementById("name_err").innerHTML =
      "Please Enter a valid  name";
    errorNum++;
  }
  if (Regexemail.test(email)) {
    document.getElementById("email_err").innerHTML = "";
  } else {
    document.getElementById("email_err").innerHTML =
      "Please Enter a valid email";
      errorNum++;
  }

  if (Regexpass.test(pass)) {
    document.getElementById("pass_err").innerHTML = "";
  } else {
    document.getElementById("pass_err").innerHTML =
      "Please Enter a valid password";
      errorNum++;
  }

  if (errorNum > 0 ) {
      return false;
  }
  // localStorage.setItem("name", name);
  // localStorage.setItem("meil", email);
  // alert("Your account has been created");
  if ( Regexname.test(name)&&Regexemail.test(email)&&Regexpass.test(pass)){
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({mail: email,pass: pass,name:name});
    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log("you're now signed up");
    alert("Your account has been created");

  }

}


function redirectPage() {
  var registerUsername = document.forms["signupForm"]["Username"].value;
  var registerEmail = document.forms["signupForm"]["email"].value;
  var registerPassword = document.forms["signupForm"]["password"].value;
  if (registerUsername == "") {
    alert("Name must be filled out");
    return false
  } else {
    window.location.href = "sign in page";

  }
}