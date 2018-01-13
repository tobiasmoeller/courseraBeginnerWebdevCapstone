//This function adjusts the margin based on the height of object above to avoid overlapping elements
function topMargin(id1,id2) {
  document.getElementById(id1).style.marginTop = "" + document.getElementById(id2).offsetHeight + "px";
}
