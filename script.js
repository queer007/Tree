const canvas = document.getElementById('christmasCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas for responsiveness
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

// Adjust canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    drawScene();
});

// Draw a star
function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    ctx.moveTo(0, -outerRadius);
    for (let i = 0; i < spikes; i++) {
        ctx.rotate(Math.PI / spikes);
        ctx.lineTo(0, -innerRadius);
        ctx.rotate(Math.PI / spikes);
        ctx.lineTo(0, -outerRadius);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

// Draw a tree
function drawTree(x, y, height) {
    const width = height / 4;
    ctx.fillStyle = "darkgreen";
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y - (i * height / 3));
        ctx.lineTo(x - width / 2, y + (i + 1) * height / 6);
        ctx.lineTo(x + width / 2, y + (i + 1) * height / 6);
        ctx.closePath();
        ctx.fill();
    }
    // Draw trunk
    ctx.fillStyle = "sienna";
    ctx.fillRect(x - width / 8, y + height / 6, width / 4, height / 6);
}

// Draw ornaments
function drawOrnaments(x, y, count) {
    for (let i = 0; i < count; i++) {
        const offsetX = Math.random() * 100 - 50;
        const offsetY = Math.random() * 100 - 50;
        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, Math.random() * 5 + 3, 0, 2 * Math.PI);
        ctx.fillStyle = ["red", "orange", "yellow"][Math.floor(Math.random() * 3)];
        ctx.fill();
    }
}

// Draw snowflakes
function drawSnowflakes(count) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 1;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

// Draw the entire scene
function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw tree
    drawTree(canvas.width / 2, canvas.height / 2, 200);

    // Draw star
    drawStar(canvas.width / 2, canvas.height / 2 - 150, 5, 20, 10, "yellow");

    // Draw ornaments
    drawOrnaments(canvas.width / 2, canvas.height / 2, 30);

    // Draw snowflakes
    drawSnowflakes(100);
}

// Initial scene
drawScene();
