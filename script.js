

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");


    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.moveTo(130, 80);

    context.arc(120, 80, 10, 0, 2 * Math.PI);
    context.moveTo(90, 80);

    context.arc(80, 80, 10, 0, 2 * Math.PI);
    context.moveTo(120, 120);

    context.arc(100, 110, 22, 0, 1 * Math.PI);
    context.stroke();
    
}