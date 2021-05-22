function toggle() {
  var tag = document.getElementById("chart");
  var vis = (tag.style.visibility === "");
  tag.style.visibility = (vis) ? "hidden" : "";
  tag.style.height = (vis) ? "0px" : "auto";
}