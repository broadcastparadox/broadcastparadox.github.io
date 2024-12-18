const output = document.getElementById("output");
const progressBar = document.getElementById("progress-bar");
const startScanButton = document.getElementById("start-scan");

// Sound effects
const soundStart = new Audio("soundeffect_start.mp3");
const soundAnomaly = new Audio("soundeffect_anomaly.mp3");
const soundNone = new Audio("soundeffect_none.mp3");

// Simulation configuration
const gibberish = [
    "Loading data packets...",
    "Analyzing bandwidth...",
    "Decrypting signal pathways...",
    "Processing node 742-A...",
    "Connection reset detected.",
    "Compiling threat vectors...",
    "Verification timeout..."
];
const scanTime = 30 * 1000; // 30 seconds
let uniqueIDs = [];

// Load IDs from JSON
fetch("ids.json")
    .then(response => response.json())
    .then(data => {
        uniqueIDs = data;
    })
    .catch(err => {
        logMessage("Error loading IDs. Check ids.json file.");
        console.error(err);
    });

function logMessage(message) {
    const timestamp = new Date().toLocaleTimeString();
    output.innerHTML += `<div>[${timestamp}] ${message}</div>`;
    output.scrollTop = output.scrollHeight;
}

function startScan() {
    // Disable button during scan
    startScanButton.disabled = true;

    logMessage("Starting scan...");
    soundStart.play();

    let progress = 0;
    const interval = setInterval(() => {
        progress += 100 / (scanTime / 100);
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            checkAnomaly();
            progressBar.style.width = "0%";
            startScanButton.disabled = false;
        } else {
            logMessage(randomGibberish());
        }
    }, 100);
}

function checkAnomaly() {
    if (Math.random() <= 0.005 && uniqueIDs.length > 0) { // 0.5% chance
        const anomalyID = uniqueIDs.pop();
        soundAnomaly.play();
        logMessage("--- ANOMALY DETECTED ---");
        logMessage(`Unique ID: ${anomalyID}`);
    } else {
        soundNone.play();
        logMessage("Scan complete. No anomalies detected.");
    }
}

function randomGibberish() {
    return gibberish[Math.floor(Math.random() * gibberish.length)];
}

startScanButton.addEventListener("click", startScan);
