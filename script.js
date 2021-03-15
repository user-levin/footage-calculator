//calc space for Movie
function calcspace() {
  let widthspace = parseInt(document.getElementById("widthspace").value);
  let heightspace = parseInt(document.getElementById("heightspace").value);
  let framespace = parseInt(document.getElementById("framespace").value);
  let datadepthspace = parseInt(document.getElementById("datadepthspace").value);
  let timespace = parseInt(document.getElementById("timespace").value);

  let resultspace = (widthspace * heightspace * framespace * datadepthspace * timespace) / (8 * Math.pow(1024, 2));
  let resultspacegb = (resultspace / 1000);

  document.getElementById("resultspace").textContent = Math.round(resultspace);
  document.getElementById("resultspacegb").textContent = Math.round(resultspacegb);
}


//calc time for Movie
function calctime() {
  let widthtime = parseInt(document.getElementById("widthtime").value);
  let heighttime = parseInt(document.getElementById("heighttime").value);
  let frametime = parseInt(document.getElementById("frametime").value);
  let datadepthtime = parseInt(document.getElementById("datadepthtime").value);
  let spacetime = parseInt(document.getElementById("spacetime").value);

  let resulttime = (8 * Math.pow(1024, 2) * spacetime) / (widthtime * heighttime * datadepthtime * frametime);
  let resulttimegb = (resulttime / 1000);
  document.getElementById("resulttime").textContent = Math.round(resulttime);
  document.getElementById("resulttimegb").textContent;
}

//calculator time for Images
function calcpic() {
  let widthtpic = parseInt(document.getElementById("widthtpic").value);
  let heightpic = parseInt(document.getElementById("heightpic").value);
  let datadepthpic = parseInt(document.getElementById("datadepthpic").value);

  let resultpic = (widthtpic * heightpic * datadepthpic) / (8 * Math.pow(1024, 2));
  let resultpicbg = (resultpic / 1000);

  document.getElementById("resultpic").textContent = Math.round(resultpic);
  document.getElementById("resultpic").textContent = Math.round(resultpicbg);

}

//for si units
var gb = "in gb";
var mb = "in mb";


//Dark Mode
function goingtothedarkside() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

  
//for copyright
var today = new Date();
var year = today.getFullYear();
var copyright = "&copy;" + " Levin Staudte" + " " + year;