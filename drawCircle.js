
var nrOfDots = 12;
var multiplier = 2;

var circleRadius = 200;
var dotRadius = 10;
var lineWidth = 1;
var offset = 50;

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    drawCircle(context);
    drawDots(context);
    /* drawLines(context); */
    
}

/**
 * Draws the outline circle for this project.
 * @param {CanvasRenderingContext2D} context 
 */

function drawCircle(context) {
    context.lineWidth = lineWidth;
    context.strokeStyle = "red";
    
    var circleCenterPoint = circleRadius + offset;
    context.arc(circleCenterPoint, circleCenterPoint, circleRadius, 0, 2 * Math.PI);
    context.stroke();
}

/**
 * Draws each dot onto the outline circle.
 * @param {CanvasRenderingContext2D} context
 */

function drawDots(context) {
    context.beginPath();

    context.fillStyle = "black";
    var outlineCircleCenter = circleRadius + offset;
    var x = outlineCircleCenter + circleRadius * Math.cos(0);
    var y = outlineCircleCenter + circleRadius * Math.sin(0);
    context.arc(x, y, dotRadius, 0, 2 * Math.PI);

    context.fill();
}