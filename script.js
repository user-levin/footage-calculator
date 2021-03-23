//Dark Mode #easteregg
function getBool(val) {
  return !!JSON.parse(String(val).toLowerCase());
}

function doOnLoad() {
  checkdarkmodestate();
  copyright()
}

//if Darkmode is on -> set "isdark"
function checkdarkmodestate() {
  let isdark = getBool(localStorage.getItem("darkmode"));

  if (isdark) {
    setDarkMode();
  }
}

const modename = "dark-mode";

function setDarkMode() {
  const completesite = document.body;

  if (completesite.classList.contains(modename)) {
    return;
  }
  completesite.classList.add(modename);
  localStorage.setItem("darkmode", true);
}

function setBrightMode() {
  const completesite = document.body;
  if (completesite.classList.contains(modename)) {
    completesite.classList.remove("dark-mode")
  }
  localStorage.setItem("darkmode", false);
}

function goingtothedarksideandgetafreecookie() {
  const completesite = document.body;
  if (completesite.classList.contains(modename)) {
    setBrightMode()
  } else {
    setDarkMode()
  }
}


/**
 * https://www.youtube.com/watch?v=OGe8OlfibQI
 * https://stackoverflow.com/questions/13693580/how-to-make-a-document-getelementbyid-value-into-an-integer-variable-not-a-stri
 * 
 */
//Calculating the storage space of video material
function calcspace() {
  let widthspace = parseInt(document.getElementById("widthspace").value);
  let heightspace = parseInt(document.getElementById("heightspace").value);
  let framespace = parseInt(document.getElementById("framespace").value);
  let datadepthspace = parseInt(document.getElementById("datadepthspace").value);
  let timespace = parseInt(document.getElementById("timespace").value);

  //let resultspace = calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace);
  let resultspace = (widthspace * heightspace * framespace * datadepthspace * timespace) / (8 * Math.pow(1024, 2));
  let resultspacegb = (resultspace / 1000);

  document.getElementById("resultspace").textContent = Math.round(resultspace);
  document.getElementById("resultspacegb").textContent = Math.round(resultspacegb);
}
/*
function calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace) {
  return (widthspace * heightspace * framespace * datadepthspace * timespace) / (8 * Math.pow(1024, 2));
}
*/


/**
 * https://stackoverflow.com/questions/25249961/value-of-select-elements-with-e-value-vs-e-optionse-selectedindex-value
 */
// function reagiert auf Änderung in der Auswahlliste und überschreibt bei neuer Auswahl. die Werte in Eingabefeldern
function renderSelections() {
  let e = document.getElementById("schnellauswahlformatstorage");
  let width = sizes[e.options[e.selectedIndex].value].w;
  let height = sizes[e.options[e.selectedIndex].value].h;
  document.getElementById("widthspace").value = width;
  document.getElementById("heightspace").value = height;
}


//Calculation of the movie time in in seconds
function calctime() {
  let widthtime = parseInt(document.getElementById("widthtime").value);
  let heighttime = parseInt(document.getElementById("heighttime").value);
  let frametime = parseInt(document.getElementById("frametime").value);
  let datadepthtime = parseInt(document.getElementById("datadepthtime").value);
  let spacetime = parseInt(document.getElementById("spacetime").value);

  let resulttime = (8 * Math.pow(1024, 2) * spacetime) / (widthtime * heighttime * datadepthtime * frametime);
  let resulttimeh = (resulttime / 3600);


  document.getElementById("resulttime").textContent = Math.round(resulttime);
  document.getElementById("resulttimeh").textContent = Math.round(resulttimeh);
}


// function reagiert auf Änderung in der Auswahlliste und überschreibt bei neuer Auswahl. die Werte in Eingabefeldern
function renderSelectiont() {
  let e = document.getElementById("schnellauswahlformattime");
  let width = sizes[e.options[e.selectedIndex].value].w;
  let height = sizes[e.options[e.selectedIndex].value].h;
  document.getElementById("widthtime").value = width;
  document.getElementById("heighttime").value = height;
}




/**
 *https://www.w3schools.com/js/js_const.asp
 */
// das kommt tendenziell aus einer Datenbank
const sizes =
{
  "575": { "h": 858, "w": 480 },
  "720": { "h": 720, "w": 1280 },
  "1080": { "h": 1080, "w": 1920 },
  "4K": { "h": 3840, "w": 2160 },
  "5K": { "h": 5120, "w": 2880 },
  "6K": { "h": 5760, "w": 3240 },
  "8K": { "h": 7690, "w": 4320 }
}

//calculator time for Images
function calcpic() {
  let widthtpic = parseInt(document.getElementById("widthtpic").value);
  let heightpic = parseInt(document.getElementById("heightpic").value);
  let datadepthpic = parseInt(document.getElementById("datadepthpic").value);

  let resultpic = (widthtpic * heightpic * datadepthpic) / (8 * Math.pow(1024, 2));

  document.getElementById("resultpic").textContent = Math.round(resultpic);
}



/**
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
 * https://www.rapidtables.com/web/html/html-codes/html-code-copyright.html
 */
//generates a copyright text with my name and the current date

function copyright() {
  var today = new Date();
  var year = today.getFullYear();
  var copyright = " Levin Staudte" + " " + year;
  document.getElementById("copyright").textContent = copyright;
}