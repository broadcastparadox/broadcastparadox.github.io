// The array containing unique IDs
const uniqueIDs = [
    "Ui5gZs8P8vOPL5B3",
    "xRygw4s097VG7eck",
    "gEGo1YOrT7l2e4Ol",
    "puPzygdhaXEplmjB",
    "mB8r9nlNeCBC3fLr",
    "vUlle8bHBkBYXiRT",
    "ugeB8tyb0zwnjzYN",
    "2zRzEz0EkvFZaqEy",
    "F1DtA5arRNdtLZy3",
    "JxLTy8o2vZXBq8qX",
    "gYrjr31fjtQf9crE",
    "m9nZOOgYbjQ86i7g",
    "UvVV9QULJhnTCsyy",
    "aXppvVBxyDkg7EG4",
    "TCwauUUlpP9weywC",
    "Kzo8GjIBddI01goj",
    "oc5WhZAJceZwEoUq",
    "Zq1o1MV13rPnZhes",
    "MY4T2uwSspCjWBwd",
    // ... Add remaining IDs here
];

// Function to randomly pick an ID and check for an anomaly
function getRandomID() {
    const randomIndex = Math.floor(Math.random() * uniqueIDs.length);
    const randomID = uniqueIDs[randomIndex];

    // 0.5% chance of triggering an anomaly
    const isAnomaly = Math.random() < 0.005;

    if (isAnomaly) {
        return { id: randomID, anomaly: true };
    } else {
        return { id: randomID, anomaly: false };
    }
}
