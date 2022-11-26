//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Result Page script ************************************************************************************* */
function showUserName2 (){
  // To get data of who loged in from session storage :
  let userName=sessionStorage.getItem('name');
  document.getElementById('UserName2').innerHTML=userName;
  }

function clearUserSession(event){
  sessionStorage.clear();
}
///  ===> Function on click to Show Result 
function showResult() {

  document.getElementById("formSection").style.display = "block";
  document.getElementById("Recomindations").style.display = "block";
  document.getElementById("BackToTOP").style.display = "block";
  document.getElementById("Start-Evaluation").style.marginBottom = "0px";
  
  }


//Recomindations Array :
  let R=['','I Recommend make this employee to work flexible hours',
  'I Recommend make this employee to attend a session about creativity',
  'I Recommend the company to make party and activities for the employees to improve their Relationships',
  'I Recommend make this employee to attend a massive courses',
  'I Recommend make this employee to work more hours to increase his productivity',
  'I Recommend make this employee to attend a communication skills courses',
  'I Recommend make this employee to attend a massive courses about  coding language',
  'I Recommend make this employee to focus on understand the problem first before try to solve it',
  'I Recommend make this employee to attend a massive courses on Search Engine Optimization (SEO)',
  ] 

  function getResullt() {
 select = document.getElementById("EmployeSelector");
 let employeeNameX = select.options[select.selectedIndex].value;
 document.getElementById("poorRecom").innerHTML =""

 let employeeName = JSON.parse(localStorage.getItem(employeeNameX))  ;
  document.getElementById("Qn1").innerHTML=employeeName[1]["Qn"];
  document.getElementById("Qn2").innerHTML=employeeName[2]["Qn"];
  document.getElementById("Qn3").innerHTML=employeeName[3]["Qn"];
  document.getElementById("Qn4").innerHTML=employeeName[4]["Qn"];
  document.getElementById("Qn5").innerHTML=employeeName[5]["Qn"];
  document.getElementById("Qn6").innerHTML=employeeName[6]["Qn"];
  document.getElementById("Qn7").innerHTML=employeeName[7]["Qn"];
  document.getElementById("Qn8").innerHTML=employeeName[8]["Qn"];
  document.getElementById("Qn9").innerHTML=employeeName[9]["Qn"];

  for(i=1;1<10;i++){
    if(employeeName[i]["Qn"]== "Poor"){
      let Qx='Qn'+i;
      document.getElementById(Qx).style.backgroundColor="Red"
      document.getElementById("poorRecom").innerHTML +='** '+R[i]+'<br>';
    }else if(employeeName[i]["Qn"]== "Excellent"){
      let Qx='Qn'+i;
      document.getElementById(Qx).style.backgroundColor="Green"

    }else if(employeeName[i]["Qn"]== "Good"){
      let Qx='Qn'+i;
      document.getElementById(Qx).style.backgroundColor="yellow";

    } 
  }

}

function backTop(){
  document.getElementById("formSection").style.display = "none";
  document.getElementById("Recomindations").style.display = "none";
  document.getElementById("BackToTOP").style.display = "none";
}

