
var nrOfDots = 12;
var multiplier = 2;

var circleRadius = 200;
var dotRadius = 3;
var lineWidth = 1;
var offset = 50;

var dotPositions = [];

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    drawCircle(context);
    drawDots(context);
    drawLines(context);
    
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

    for (var i = 0; i < nrOfDots; i++) {
        var angle = 2 * Math.PI / nrOfDots * i;
        var outlineCircleCenter = circleRadius + offset;
        var x = outlineCircleCenter + circleRadius * Math.cos(angle);
        var y = outlineCircleCenter + circleRadius * Math.sin(angle);
        context.moveTo(x, y);
        context.arc(x, y, dotRadius, 0, 2 * Math.PI);

        dotPositions.push({
            x: x,
            y: y,
        });
    }

        context.fill();
}

/**
 * Draws a line from each line to another based on multiplier value.
 * @param {CanvasRenderingContext2D} context
 */

function drawLines(context) {
    context.strokeStyle = "black";
    context.beginPath();
    for (var i = 0; i < nrOfDots; i++) {
        var startPoint = dotPositions[i];
        var nextIndex = (i * multiplier) % nrOfDots;
        var endPoint = dotPositions[nextIndex];

        context.moveTo(startPoint.x, startPoint.y);
        context.lineTo(endPoint.x, endPoint.y);

    }
    context.stroke();
}