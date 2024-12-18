let ids = [];
let anomalyChance = 0.01; // 1% chance for anomaly

// Load the CSV file using PapaParse
Papa.parse('ids.csv', {
  download: true,
  complete: function(results) {
    ids = results.data.map(row => row[0]); // Assuming IDs are in the first column of the CSV
    console.log('IDs loaded:', ids);
  }
});

// Function to simulate scanning
function scan() {
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
