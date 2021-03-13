//calc
function calcspace() {
  let widthspace = parseInt(document.getElementById("widthspace").value);
  let heightspace = parseInt(document.getElementById("heightspace").value);
  let framespace = parseInt(document.getElementById("framespace").value);
  let datadepthspace = parseInt(document.getElementById("datadepthspace").value);
  let timespace = parseInt(document.getElementById("timespace").value);

  let resultspace = (widthspace * heightspace * framespace * datadepthspace * timespace) / (8 * Math.pow(1024, 2));

  document.getElementById("resultspace").textContent = Math.round(resultspace);
}

function calctime() {
  let widthtime = parseInt(document.getElementById("widthtime").value);
  let heighttime = parseInt(document.getElementById("heighttime").value);
  let frametime = parseInt(document.getElementById("frametime").value);
  let datadepthtime = parseInt(document.getElementById("datadepthtime").value);
  let spacetime = parseInt(document.getElementById("spacetime").value);

  let resulttime = (8 * Math.pow(1024, 2) * spacetime) / (widthtime * heighttime * datadepthtime * frametime);

  document.getElementById("resulttime").textContent = Math.round(resulttime);
}

function goingtothedarkside() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//for copyright
  var today = new Date();
  var year = today.getFullYear();
  var copyright = "&copy;" + " Levin Staudte" + " " + year; 