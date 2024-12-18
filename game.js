let ids = [];
let anomalyChance = 0.01; // 1% chance for anomaly

// Load the CSV file using PapaParse
Papa.parse('https://github.com/broadcastparadox/broadcastparadox.github.io/blob/main/ids.csv', {  // Ensure the path points to the correct location of your CSV
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

  const terminal = document.getElementById('terminal');
  terminal.innerHTML += `Scanning for anomalies...\n`;

  const randomId = ids[Math.floor(Math.random() * ids.length)];
  const isAnomaly = Math.random() < anomalyChance; // 1% chance of anomaly

  if (isAnomaly) {
    terminal.innerHTML += `Anomaly detected in ID: ${randomId}\n`;
  } else {
    terminal.innerHTML += `No anomaly found in ID: ${randomId}\n`;
  }
}
