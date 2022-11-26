//****************************************************************************************************************************************************************************************** */
//*********************************************************************  Evaluation page Script**************************************************************************** */


let employeeNamex=[];
let select=document.getElementById("EmployeSelector");
let options = document.getElementsByTagName("option");
let employeeName; 


function showUserName(){
// To get data of who loged in from session storage :
let userName=sessionStorage.getItem('name');
document.getElementById('UserName').innerHTML=userName;
}

// ******************************* For Employe info Section  **************************************************

// Araay  For Adding Employee Data 
// let RatingData={};
let names=[];
let idnum=[];
let n=0000;
for(i=1;i<options.length;i++){
idnum.push('000'+n+i)
names.push(options[i].value)

}

let employee = {
Name: names,
id: idnum,
Department: ["Enginering","It Department","It Department","Human Resources","Enginering","Enginering","It Department","It Department","Human Resources","Enginering","Enginering","It Department","It Department","Human Resources","Enginering",],
};


// document.getElementById("EmployeSelector").onchange = function () {getinfo()};    ///  ===> Function on change for the select 
function getinfo() {
  let userName=sessionStorage.getItem('name');
document.getElementById("EmployeData").style.display= 'grid';
document.getElementById("namesLable").style.marginTop= "0px";
 select = document.getElementById("EmployeSelector");
 employeeName = select.options[select.selectedIndex].value;

for(i=0;i<options.length;i++){
  if (employeeName == employee["Name"][i]) {
    document.getElementById("Name-data").innerHTML = employeeName;
    document.getElementById("id-data").innerHTML = employee["id"][i];
    document.getElementById("department-data").innerHTML =employee["Department"][i];
    document.getElementById("userPic").src = "./img/u"+i+".jpg"; 
    let idx = employee["id"][i];
    // let empxarr=employee["employeeAray"][i];
    employeeNamex=employeeName+i;
    employeeNamex=[];
    employeeNamex.push({evaluatedBy: userName,employee: employeeName,idNum: idx,});
    // RatingData[employeeName]=employeeNamex;
    localStorage.setItem(employeeName, JSON.stringify(employeeNamex));

  }}

document.getElementById("formSection").style.display = "none";
// document.getElementById("Start-Evaluation").style.marginBottom = "13%";

}
//*************************************************************************************************************************************** 


// document.getElementById("Start-Evaluation").onclick = function () {StartE()};     ///  ===> Function on click to start evaluation form 
function StartE() {
document.getElementById("formSection").style.display = "block";
document.getElementById("Start-Evaluation").style.marginBottom = "0px";

}

//*************************************************************************************************************************************** 
function submitForm(event) {      
                                              ///  ===> Function on submit to submit Radio input Value
select = document.getElementById("EmployeSelector");
employeeName = select.options[select.selectedIndex].value;
let radioButtons = document.getElementsByTagName("input");


for (i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].checked) {
    let Qn = radioButtons[i].value;
    
      obj={Qn}
      employeeNamex.push(obj);
      localStorage.setItem(employeeName, JSON.stringify(employeeNamex));
  }

}
}

// document.getElementById("MainForm").addEventListener('submit',Sucsses)
function Sucsses(){
alert(employeeName+' evaluation successfully')
}



//*************************************************************************************************************************************** 
function clearUserSession(event){                                             ///  ===> Function To Clear Session Storage on LogOut
sessionStorage.clear();
}
//***************************************************************************************************************************************




//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Log in Page script ************************************************************************************* */


function loginUser() {
let key = false;
let uIndex = null;
let formData = JSON.parse(localStorage.getItem('formData')) || [];
formData.forEach((element, arrayIndex) => {
    if (element.mail == email.value) {
        key = true;
        uIndex = arrayIndex;
    }
});

if (key && formData[uIndex].pass == password.value) {
    sessionStorage.mail = formData[uIndex].mail;
    sessionStorage.name = formData[uIndex].name;
} else if (key && formData[uIndex].pass !== password.value) {

    document.getElementById("pass_err").innerHTML =
  "Wrong password Please try again";
    return false;

} else if (!key) {

    document.getElementById("email_err").innerHTML =
  "Account not found Sign up please";
    return false;

} else {
    console.log("hey!");
}

}



//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Sign Up Page script ************************************************************************************* */

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
  
    if ( Regexname.test(name)&&Regexemail.test(email)&&Regexpass.test(pass)){
      let formData = JSON.parse(localStorage.getItem('formData')) || [];
      formData.push({mail: email,pass: pass,name:name});
      localStorage.setItem('formData', JSON.stringify(formData));
      alert("Your account has been created");
    }}


//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Result Page script ************************************************************************************* */


