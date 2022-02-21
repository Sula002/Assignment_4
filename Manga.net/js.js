$("h1").css("color","white");
$("h3").css("color","white");
function searcher(){
  var x=document.getElementById('search').value;
  var y;
  y=x.toLowerCase();
  if(y==="убийство героя"){
    window.open("Убийство героя.html");
  }
  else if(y==="выживание на необитаемом острове с красавицей"){
    window.open("Выживание на необитаемом острове с красавицой.html");
  }
  else if(y==="возвращение игрока"){
    window.open("Возвращение героя.html");
  }
}
