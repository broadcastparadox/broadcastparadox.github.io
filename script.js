// Array of unique IDs to be pulled
const uniqueIDs = [
    "Ui5gZs8P8vOPL5B3", "xRygw4s097VG7eck", "gEGo1YOrT7l2e4Ol", "puPzygdhaXEplmjB",
    "mB8r9nlNeCBC3fLr", "vUlle8bHBkBYXiRT", "ugeB8tyb0zwnjzYN", "2zRzEz0EkvFZaqEy",
    "F1DtA5arRNdtLZy3", "JxLTy8o2vZXBq8qX", "gYrjr31fjtQf9crE", "m9nZOOgYbjQ86i7g",
    "UvVV9QULJhnTCsyy", "aXppvVBxyDkg7EG4", "TCwauUUlpP9weywC", "Kzo8GjIBddI01goj",
    "oc5WhZAJceZwEoUq", "Zq1o1MV13rPnZhes", "MY4T2uwSspCjWBwd", "MWgrzGWFK6fgm3Ie"
    // Add the rest of your IDs here...
];

// Audio files (Make sure to add the actual mp3 files)
const startScanSound = new Audio('soundeffect_start.mp3');
const anomalyFoundSound = new Audio('soundeffect_anomaly.mp3');
const noAnomalySound = new Audio('soundeffect_no_anomaly.mp3');

// Function to generate random anomaly detection with 0.5% chance
function getRandomID() {
    const randomIndex = Math.floor(Math.random() * uniqueIDs.length);
    const randomID = uniqueIDs[randomIndex];
    const isAnomaly = Math.random() < 0.005; // 0.5% chance for anomaly

    return { id: randomID, anomaly: isAnomaly };
}

// Start scan function
function startScan() {
    const outputElement = document.getElementById("output");

    // Play scan start sound
    startScanSound.play();

    outputElement.textContent += "\n[Scanning for anomalies...]\n";
    outputElement.scrollTop = outputElement.scrollHeight;

    setTimeout(() => {
        // Check for anomalies after 30 seconds
        const result = getRandomID();
        const timestamp = new Date().toLocaleTimeString();

        if (result.anomaly) {
            // Anomaly found, display ID and message
            outputElement.textContent += `[${timestamp}] Anomaly detected!\nUnique ID: ${result.id}\n`;
            outputElement.scrollTop = outputElement.scrollHeight;
            anomalyFoundSound.play();
        } else {
            // No anomaly found
            outputElement.textContent += `[${timestamp}] Scan completed. No anomalies found.\n`;
            outputElement.scrollTop = outputElement.scrollHeight;
            noAnomalySound.play();
        }

        // Trigger another scan after a delay (you can adjust this time)
        startScan();
    }, 30000); // 30 seconds interval
}

// Event listener for the scan button
document.getElementById("scanButton").addEventListener("click", function() {
    startScan();
});
