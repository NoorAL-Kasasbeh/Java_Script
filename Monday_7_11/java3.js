

var i = 0;
function change() {
  var doc = document.getElementById("text");
  var color = ["blue", "red","orange"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);
  

   