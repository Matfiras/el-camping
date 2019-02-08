
function mode(m){
  
if (m==='mode-1')
  document.getElementById("calendar").classList.add('container')
if (m==='mode-2'){
  document.getElementById("calendar").classList.remove('container')
  document.getElementById("calendar").classList.add('container-fluid')

}
}

function info(x){
  var rf=x[x.length-1]
  var htest= document.getElementById("test"+rf)
  if(document.getElementById("date-dest-"+rf).contains(htest)===false){
  var img = document.getElementById(x).getAttribute("src")
  document.getElementById("img-dest-"+rf).setAttribute("src",img)
  var z = document.createElement('h6')
  var h6= document.getElementById("date-src-"+rf).innerText
  z.innerHTML = h6;
  document.getElementById("date-dest-"+rf).appendChild(z);
  document.getElementsByTagName("H6")[0].setAttribute("id", "test"+rf)
}
}


function bigImg(x) {
  x.style.height = "110%";
  x.style.width = "550px";
}

function normalImg(x) {
  x.style.height = "220px";
  x.style.width = "100%";
}



