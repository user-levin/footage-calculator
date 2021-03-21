//calc space for Movie
function calcspace() {
  let widthspace = parseInt(document.getElementById("widthspace").value);
  let heightspace = parseInt(document.getElementById("heightspace").value);
  let framespace = parseInt(document.getElementById("framespace").value);
  let datadepthspace = parseInt(document.getElementById("datadepthspace").value);
  let timespace = parseInt(document.getElementById("timespace").value);

  //let resultspace = calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace);
  let resultspace = calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace);

  document.getElementById("resultspace").textContent = Math.round(resultspace);
  //document.getElementById("resultspacegb").textContent = Math.round(resultspacegb);
}

function calcspace2(widthspace, heightspace, framespace, datadepthspace, timespace) {
  return (widthspace * heightspace * framespace * datadepthspace * timespace) / (8 * Math.pow(1024, 2));
}