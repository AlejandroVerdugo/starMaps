var d = document.getElementById("myCanvas");
var lienzo = d.getContext("2d");
console.log(lienzo);
var x = 394;
var y = 552;
lienzo.fillStyle = "black";
lienzo.fillRect(0, 0, x, y);

lienzo.strokeStyle = "white";
lienzo.lineWidth = 2;
lienzo.strokeRect(18, 18, 358, 516);
lienzo.arc(200, 190, 150, 0, 2 * Math.PI);
lienzo.stroke();
lienzo.closePath();
