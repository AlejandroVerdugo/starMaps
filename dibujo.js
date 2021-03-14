var d = document.getElementById("myCanvas");
var lienzo = d.getContext("2d");
console.log(lienzo);
var x = 394;
var y = 552;
lienzo.fillStyle = "black";
lienzo.fillRect(0, 0, x, y);

lienzo.beginPath();
lienzo.strokeStyle = "white";
marco();
lienzo.stroke();
lienzo.closePath();
function marco() {
  for (let i = 0; i < 10; i++) {
    lienzo.moveTo(18, 18);
    lienzo.lineTo(18, y - 18);
    lienzo.lineTo(x - 18, y - 18);
    lienzo.lineTo(x - 18, 18);
    lienzo.lineTo(18, 18);
  }
}

lienzo.beginPath();
lienzo.strokeStyle = "white";
circulo();
lienzo.stroke();
lienzo.closePath();

function circulo() {
  for (let i = 0; i < 10; i++) {
    lienzo.arc(200, 190, 150, 0, 2 * Math.PI);
  }
}
