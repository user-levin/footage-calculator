//calc
function calc() {
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);
    let frame = parseInt(document.getElementById("frame").value);
    let datadepth = parseInt(document.getElementById("datadepth").value);
    let time = parseInt(document.getElementById("time").value);
  
    let result = (width * height * frame * datadepth * time) / (8 * Math.pow(1024, 2));

    document.getElementById("result").textContent = result.toPrecision(4);
  }


  function goingtothedarkside() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


//for copyright
var today = new Date();
var year = today.getFullYear();
var copyright = "&copy;" + " Levin Staudte" + " " + year; 