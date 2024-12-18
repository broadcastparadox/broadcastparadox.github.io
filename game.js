let ids = [];
let anomalyChance = 0.01; // 1% chance for anomaly
let isCooldown = false;  // Flag to track cooldown state

// Load the CSV file using PapaParse
Papa.parse('https://raw.githubusercontent.com/broadcastparadox/broadcastparadox.github.io/main/ids.csv', {  // Ensure the path points to the correct location of your CSV
  download: true,
  complete: function(results) {
    ids = results.data.map(row => row[0]); // Assuming IDs are in the first column of the CSV
    console.log('IDs loaded:', ids);
  },
  error: function(error) {
    console.error('Error loading CSV:', error);
  }
});

// Function to simulate scanning
function scan() {
  // Check if IDs have been loaded
  if (ids.length === 0) {
    alert("IDs not loaded yet. Please wait a moment.");
    return;
  }

  // Check if cooldown is active
  if (isCooldown) {
    alert("Please wait for the cooldown to finish.");
    return;
  }

  // Start cooldown
  isCooldown = true;

  const terminal = document.getElementById('terminal');
  terminal.innerHTML = `Scanning for anomalies...\n`; // Replace the text

  const randomId = ids[Math.floor(Math.random() * ids.length)];
  const isAnomaly = Math.random() < anomalyChance; // 1% chance of anomaly

  if (isAnomaly) {
    terminal.innerHTML = `Anomaly detected in ID: ${randomId}\n`;
  } else {
    terminal.innerHTML = `No anomaly found in ID: ${randomId}\n`;
  }

  // Set a 30-second cooldown before another scan is allowed
  setTimeout(function() {
    isCooldown = false;  // Cooldown finished
  }, 30000); // 30 seconds cooldown
}
