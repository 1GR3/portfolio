export function initCanvasAnimation() {
    const waveHeight = 150;
    const colours = ["#fff", "#CAEAEE"];
    const canvasId = "canvas"; // Single canvas id
    let waves = [];

    function init() {
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            console.error(`Canvas with id "${canvasId}" not found`);
            return;
        }

        console.log(`Initializing canvas: ${canvasId}`);
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error(`Failed to get context for canvas "${canvasId}"`);
            return;
        }

        resizeCanvas(canvas);

        // Initialize waves
        for (let i = 0; i < 3; i++) {
            waves.push(new wave(colours[i], 1, 10, canvas.width));
        }

        // Start the animation loop
        update(canvas, ctx);
    }

    function update(canvas, ctx) {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#caeaee"; // Background color for the canvas
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        waves.forEach((waveObj) => {
            waveObj.nodes.forEach((node) => bounce(node, canvas));
            drawWave(waveObj, ctx, canvas);
        });

        requestAnimationFrame(() => update(canvas, ctx));
    }

    function wave(colour, lambda, nodes, cvsWidth) {
        this.colour = colour;
        this.lambda = lambda;
        this.nodes = [];

        for (let i = 0; i <= nodes + 2; i++) {
            this.nodes.push([((i - 1) * cvsWidth) / nodes, 0, Math.random() * 200, 0.3]);
        }
    }

    function bounce(nodeArr, canvas) {
        nodeArr[1] = (waveHeight / 2) * Math.sin(nodeArr[2] / 20) + canvas.height / 2;
        nodeArr[2] += nodeArr[3];
    }

    function drawWave(waveObj, ctx, canvas) {
        const diff = (a, b) => (b - a) / 2 + a;

        ctx.fillStyle = waveObj.colour;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(waveObj.nodes[0][0], waveObj.nodes[0][1]);

        for (let i = 0; i < waveObj.nodes.length; i++) {
            if (waveObj.nodes[i + 1]) {
                ctx.quadraticCurveTo(
                    waveObj.nodes[i][0],
                    waveObj.nodes[i][1],
                    diff(waveObj.nodes[i][0], waveObj.nodes[i + 1][0]),
                    diff(waveObj.nodes[i][1], waveObj.nodes[i + 1][1])
                );
            } else {
                ctx.lineTo(waveObj.nodes[i][0], waveObj.nodes[i][1]);
                ctx.lineTo(canvas.width, canvas.height);
            }
        }

        ctx.closePath();
        ctx.fill();
    }

    function resizeCanvas(canvas) {
        canvas.width = window.innerWidth || 1920;
        canvas.height = waveHeight;
        console.log(`Canvas resized: ${canvas.width}x${canvas.height}`);
    }

    return { init };
}
