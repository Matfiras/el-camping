
function mode(m){
  
if (m==='mode-1')
  document.getElementById("calendar").classList.add('container')
if (m==='mode-2'){
  document.getElementById("calendar").classList.remove('container')
  document.getElementById("calendar").classList.add('container-fluid')

}
}

function info(){
  var img = document.getElementById("img-src").getAttribute("src")
  document.getElementById("img-dest").setAttribute("src",img)
  var z = document.createElement('h6')
  var h6= document.getElementById("date-src").innerText
  z.innerHTML = h6;
  document.getElementById("date-dest").appendChild(z);
}
  //
  //document.getElementById("date-dest").appendChild(h6)
}

function bigImg(x) {
  x.style.height = "110%";
  x.style.width = "550px";
}

function normalImg(x) {
  x.style.height = "220px";
  x.style.width = "100%";
}



