function toggleButton(){
  var em=document.getElementById("floatingInput").value;
  var un = document.getElementById("floatingUsername").value;
  var ps = document.getElementById("floatingPassword").value;
  var cps = document.getElementById("floatingConfirmPassword").value;
  if(un && ps && cps && em){
    document.getElementById('btn01').disabled = false;
  }
  else{
    document.getElementById('btn01').disabled = true;
  }
}
function regestration(){
  var em=document.getElementById("floatingInput").value;
  var un = document.getElementById("floatingUsername").value;
  var ps = document.getElementById("floatingPassword").value;
  var cps = document.getElementById("floatingConfirmPassword").value;
  if(un.length==0){
    window.alert("Fill the username blank");
  }
  else if(ps.length==0){
    window.alert("Fill the password blank");
  }
  else if (cps.length==0){
    window.alert("Fill the confirm password blank");
  }
  else if (em.length==0){
    window.alert("Fill the email blank");
  }
  else if(ps!=cps){
    window.alert("Password and Confirm password not equal");
  }
  else{
    window.alert("Regestration succesfull");
  }
}
