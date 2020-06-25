var fecha = new Date();
document.getElementById("fecha").innerHTML = "©" + " " + fecha.getDate() + " / " + (fecha.getMonth() + 1) + " / " + fecha.getFullYear() + " All rights reserved";

function mouseOver(x) {
    if (x) {
    document.getElementById("txt1").style.textShadow = "2px 2px 5px #77ebff";
    }
    else {
      document.getElementById("txt2").style.textShadow = "2px 2px 5px #77ebff";
    }
  }
  
  function mouseOut(x) {
      if (x) {
    document.getElementById("txt1").style.textShadow = "none";
    }
    else {
      document.getElementById("txt2").style.textShadow = "none";
    }
  }
  function toggle() {
    var x = document.getElementById("numrep");
    var y = document.getElementById("cliente");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
    } else {
      y.style.display = "none";
      x.style.display = "block";
    }
  }

  
  function CalcFilter() {
    var com = [10 , 12 , 15 , 18 , 22 , 27 , 33 , 39 , 47 , 51 , 56 , 68 , 82 , 100];
    var flow;
    var fhigh;
    var auxlow;
    var auxhigh;
    var cifraslow;
    var cifrashigh;
    var i;
    var x;
    var y;
    flow = document.getElementById("flow").value;
    fhigh = document.getElementById("fhigh").value;
    flow = Math.round(1 / (flow * 10e-7 * 6.28));
    fhigh = Math.round(1 / (fhigh * 10e-8 * 6.28));
    auxlow = flow.toString();
    auxhigh = fhigh.toString();
    cifraslow = auxlow.length - 1;
    cifrashigh = auxhigh.length - 1;
    x = auxlow.slice(0, 2);
    y = auxhigh.slice(0,2);
    for (i = 0 ; i < com.length ; i++){
      if (y <= com[i]){
        y = com[i];
        i = com.length;
      }
    }

    for (i = 0 ; i < com.length ; i++){
      if (x <= com[i]){
        x = com[i];
        i = com.lenght;
        }
    }
    switch (cifraslow){
      case 0 :
        break;
      case 1 :
        x = (x * 10) + "Ω";
        break;
      case 2 :
        x = (x / 10) + "KΩ";
        break;
      case 3 :
        x += "KΩ";
        break;
      case 4 :
        x = (x / 10) + "MΩ";
        break;
      case 5 :
        x += "MΩ";
        break;
    }
    switch (cifrashigh){
      case 0 :
        break;
      case 1 :
        y = (y * 10) + "Ω";
        break;
      case 2 :
        y = (y / 10) + "KΩ";
        break;
      case 3 :
        y += "KΩ";
        break;
      case 4 :
        y = (y / 10) + "MΩ";
        break;
      case 5 :
        y += "MΩ";
        break;
    }
    document.getElementById("resultado").style.display = "block";
    document.getElementById("R1").innerHTML = "R1 = " + x;
    document.getElementById("R2").innerHTML = "R2 = " + y;
  }

  function Desp(x) {
    x.classList.toggle("rot");
    document.getElementById("navbar").style.width = "250px";
  }

  function unDesp() {
    Desp(document.getElementById("menu"));
    document.getElementById("navbar").style.width = "0px";
  }

  function Show(x) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("fullimg").src = x.src;
  }

  function Close() {
    document.getElementById("modal").style.display = "none";
  }
