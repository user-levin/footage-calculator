//Dark Mode
function getBool(val) {
  return !!JSON.parse(String(val).toLowerCase());
}

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


function goingtothedarkside() {
  const completesite = document.body;
  if (completesite.classList.contains(modename)) {
    setBrightMode()
  } else {
    setDarkMode()
  }
}



//calc space for Movie
function calcspace() {
  let widthspace = parseInt(document.getElementById("widthspace").value);
  let heightspace = parseInt(document.getElementById("heightspace").value);
  let framespace = parseInt(document.getElementById("framespace").value);
  let datadepthspace = parseInt(document.getElementById("datadepthspace").value);
  let timespace = parseInt(document.getElementById("timespace").value);

  let resultspace = calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace);
  //let resultspacegb = (resultspace / 1000);

  document.getElementById("resultspace").textContent = Math.round(resultspace);
  //document.getElementById("resultspacegb").textContent = Math.round(resultspacegb);
}

function calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace) {
//function calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace) {
  return (widthspace * heightspace * framespace * datadepthspace * timespace) / (8 * Math.pow(1024, 2));
}



/**
 *https://www.w3schools.com/js/js_const.asp
 */
//
const sizes =
{
  "575": { "h": 1024, "w": 576 },
  "720": { "h": 720, "w": 1280 },
  "1080": { "h": 1080, "w": 1920 },
  "4K": { "h": 3840, "w": 2160 },
  "5K": { "h": 5120, "w": 2880 },
  "6K": { "h": 5760, "w": 3240 },
  "8K": { "h": 7690, "w": 4320 }
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


//var resultpic= parseInt(resultpic) + parseInt(mb);

function renderSelection() {

  let e = document.getElementById("schnellauswahlformat");
  let width = sizes[e.options[e.selectedIndex].value].w;
  let height = sizes[e.options[e.selectedIndex].value].h;
  document.getElementById("selected").textContent = "Hoch: " + height + " | Breit: " + width;

  // let widthspace = parseInt(document.getElementById("widthspace").value);
  // let heightspace = parseInt(document.getElementById("heightspace").value);
  // let framespace = parseInt(document.getElementById("framespace").value);
  // let datadepthspace = parseInt(
  //   document.getElementById("datadepthspace").value
  // );
  // let timespace = parseInt(document.getElementById("timespace").value);

  // let resultspace = calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace);
  // let resultspacegb = (resultspace / 1000);

  // document.getElementById("resultspace").textContent = Math.round(resultspace);
  // document.getElementById("resultspacegb").textContent = Math.round(resultspacegb);
}


//for si units
var gb = "in gb";
var mb = "in mb";




//for copyright
var today = new Date();
var year = today.getFullYear();
var copyright = "&copy;" + " Levin Staudte" + " " + year;