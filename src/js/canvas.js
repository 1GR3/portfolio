(function () {
    "use strict";

    var nodes = 10;
    var waveHeight = 150;
    var colours = ["#fff", "#CAEAEE"];
    var canvases = [
        {
            id: "canvas",
            waves: [],
        },
        {
            id: "canvas-bottom",
            waves: [],
        },
    ];

    function init() {
        canvases.forEach(function (canvasObj) {
            var canvas = document.getElementById(canvasObj.id);
            canvasObj.element = canvas;
            canvasObj.context = canvas.getContext("2d");
            resizeCanvas(canvas);

            for (var i = 0; i < 3; i++) {
                canvasObj.waves.push(new wave(colours[i], 1, nodes, canvas.width));
            }

            update(canvasObj);
        });
    }

    function update(canvasObj) {
        var ctx = canvasObj.context;
        var cvs = canvasObj.element;

        ctx.globalCompositeOperation = "source-over";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.globalCompositeOperation = "screen";

        for (var i = 0; i < canvasObj.waves.length; i++) {
            for (var j = 0; j < canvasObj.waves[i].nodes.length; j++) {
                bounce(canvasObj.waves[i].nodes[j], cvs);
            }
            drawWave(canvasObj.waves[i], ctx, cvs);
        }

        requestAnimationFrame(function () {
            update(canvasObj);
        });
    }

    function wave(colour, lambda, nodes, cvsWidth) {
        this.colour = colour;
        this.lambda = lambda;
        this.nodes = [];

        for (var i = 0; i <= nodes + 2; i++) {
            var temp = [((i - 1) * cvsWidth) / nodes, 0, Math.random() * 200, 0.3];
            this.nodes.push(temp);
        }
    }

    function bounce(nodeArr, cvs) {
        nodeArr[1] = (waveHeight / 2) * Math.sin(nodeArr[2] / 20) + cvs.height / 2;
        nodeArr[2] = nodeArr[2] + nodeArr[3];
    }

    function drawWave(obj, ctx, cvs) {
        var diff = function (a, b) {
            return (b - a) / 2 + a;
        };

        ctx.fillStyle = obj.colour;
        ctx.beginPath();
        ctx.moveTo(0, cvs.height);
        ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);

        for (var i = 0; i < obj.nodes.length; i++) {
            if (obj.nodes[i + 1]) {
                ctx.quadraticCurveTo(
                    obj.nodes[i][0],
                    obj.nodes[i][1],
                    diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
                    diff(obj.nodes[i][1], obj.nodes[i + 1][1])
                );
            } else {
                ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
                ctx.lineTo(cvs.width, cvs.height);
            }
        }

        ctx.closePath();
        ctx.fill();
    }

    function drawNodes(array) {
        ctx.strokeStyle = "#888";

        for (var i = 0; i < array.length; i++) {
            ctx.beginPath();
            ctx.arc(array[i][0], array[i][1], 4, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
        }
    }

    function drawLine(array) {
        ctx.strokeStyle = "#888";

        for (var i = 0; i < array.length; i++) {
            if (array[i + 1]) {
                ctx.lineTo(array[i + 1][0], array[i + 1][1]);
            }
        }

        ctx.stroke();
    }

    function resizeCanvas(canvas, width, height) {
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
        } else {
            if (window.innerWidth > 1920) {
                canvas.width = window.innerWidth;
            } else {
                canvas.width = 1920;
            }

            canvas.height = waveHeight;
        }
    }

    document.addEventListener("DOMContentLoaded", init, false);
})();
