

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    context.lineWidth = 3;
    context.strokeStyle = "yellow";

    context.beginPath();
    drawHead(context);
    drawEyes(context);
    drawMouth(context);
    context.stroke();

    function drawHead(context){
        context.arc(100, 100, 50, 0, 2 * Math.PI);
        context.moveTo(130, 80);
    }

    function drawEyes(context){
        context.arc(120, 80, 10, 0, 2 * Math.PI);
        context.moveTo(90, 80);

        context.arc(80, 80, 10, 0, 2 * Math.PI);
        context.moveTo(120, 120);
    }

    function drawMouth(context){
        context.arc(100, 110, 22, 0, 1 * Math.PI);
    }

}