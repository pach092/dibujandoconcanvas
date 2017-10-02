areaDeDibujo.addEventListener("click", dibujarMouse);

var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento){
    mouseX = evento.screenX - 7;
    mouseY = evento.screenY - 99;
    console.log(mouseX + " " + mouseY);
    var colorcito = "green";
    dibujarLinea(colorcito, x, y, mouseX, mouseY, papel);
    x = mouseX;
    y = mouseY;

}