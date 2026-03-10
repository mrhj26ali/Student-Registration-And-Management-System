/* --- Newsletter UI Logic --- */
function togglePreferences() {
    const check = document.getElementById("newsletterCheck");
    const pref = document.getElementById("prefSection");
    
    if (check && pref) {
        // Toggle visibility based on checkbox state
        pref.style.display = check.checked ? "block" : "none";
    }
}

/* --- Flower Game Logic --- */
function initFlowerGame() {
    const petalLayer = document.getElementById('petal-layer');
    const flower = document.getElementById('flower-center');
    const petalInput = document.getElementById('petalInput');
    const speedSlider = document.getElementById('speedSlider');
    const btnToggle = document.getElementById('btnToggle');
    const btnReverse = document.getElementById('btnReverse');

    // Safety Guard: Exit if elements are missing (prevents errors on other pages)
    if (!petalLayer || !flower || !petalInput) return;

    let isRunning = true;

    // Drawing logic
    const render = () => {
        const count = parseInt(petalInput.value) || 8;
        const speedValue = parseFloat(speedSlider.value) || 2;
        const duration = 5.2 - speedValue; 
        
        flower.style.setProperty('--speed', duration + 's');
        petalLayer.innerHTML = '';

        for (let i = 0; i < count; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            const angle = (360 / count) * i;
            const opacity = 1 - (i / count) * 0.9;
            
            petal.style.transform = `rotate(${angle}deg)`;
            petal.style.opacity = opacity;
            petal.style.zIndex = count - i; 
            petalLayer.appendChild(petal);
        }
    };

    // Button controls
    btnToggle.onclick = () => {
        isRunning = !isRunning;
        flower.style.animationPlayState = isRunning ? 'running' : 'paused';
        btnToggle.innerText = isRunning ? 'Stop' : 'Start';
    };

    btnReverse.onclick = () => {
        const currentDir = getComputedStyle(flower).animationDirection;
        flower.style.animationDirection = (currentDir === 'reverse') ? 'normal' : 'reverse';
    };

    // Input listeners
    petalInput.oninput = render;
    speedSlider.oninput = render;

    render(); // Initial render
}

/* --- Initialization --- */
document.addEventListener("DOMContentLoaded", function() {
    console.log("System UI Initialized");

    // Initialize Newsletter behavior
    const newsletterCheck = document.getElementById("newsletterCheck");
    if (newsletterCheck) {
        togglePreferences(); // Set initial state
        newsletterCheck.addEventListener("change", togglePreferences); // Listen for clicks
    }

    // Initialize Flower Game
    initFlowerGame();
});