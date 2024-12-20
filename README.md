The Broadcast Paradox:

The Broadcast Paradox is a cyberpunk visual novel and hacking simulation designed to simulate data analysis and anomaly detection in a narrative-driven environment. This document provides an overview of the current system architecture, game mechanics, and planned features to aid in development. The game is being built with modularity and expandability in mind, enabling future integration of more advanced systems like branching dialogue and dynamic narrative structures.

System Architecture
The game is currently being developed using:

Frontend: HTML, CSS, JavaScript, and libraries like PapaParse (for handling CSV files).
Platform: Web-based delivery via GitHub Pages, ensuring broad accessibility.
Core Components:
Terminal Simulation: Simulates user interaction via a CLI-style interface.
ID System: Pulls unique identifiers from a CSV file to represent discovered anomalies.
Audio Integration: Enhances immersion with background music and contextual sound effects.
Core Mechanics
1. Terminal Simulation
The terminal acts as the primary interface between the player and the game world. It is designed to emulate a retro hacking console:

Output Formatting: Uses timestamped logs to simulate real-time scanning operations.
Command Execution: Mock commands are executed in response to user interactions, with randomized outcomes for variability.
Error Handling: Built-in messages simulate failed connections, incomplete scans, or system malfunctions.
2. Anomaly Detection
The anomaly detection system introduces randomness and variability to scanning operations:

Frequency Range Scanning: The game "sweeps" a predefined range (e.g., 88.1–107.9 MHz).
Anomaly Probability: A configurable probability (currently ~30%) determines the likelihood of an anomaly during each scan.
Unique Identifier Assignment: Anomalies are linked to IDs from the CSV file, simulating a unique signal discovery.
3. Data-Driven Design
All dynamic content is pulled from external files or configurable settings to ensure flexibility:

CSV Integration: Unique broadcast IDs are stored in an external ids.csv file, enabling easy updates and expansion without modifying code.
Localization Ready: The terminal messages and logs can be externalized into language files for future localization.
4. Reward System
The game includes a rudimentary tokenomics model:

Paradox Signal Token: A placeholder reward system tied to anomaly detection and narrative progression.
Integration Placeholder: The system is designed to support further expansion into blockchain or other token ecosystems.
Planned Features
1. Dialogue System
A branching dialogue system is under development:

Node-Based Structure: Dialogue will follow a tree structure, with nodes representing decisions and outcomes.
State Management: Player choices will be stored to influence future interactions.
2. Dynamic Events
Future iterations will include dynamic game events based on player activity:

Triggered Anomalies: Certain anomalies will unlock narrative threads or unique gameplay experiences.
Reactive World States: The terminal will simulate changes in the environment, such as interference or new signal ranges.
3. Advanced AI Integration
The AI modules will enhance gameplay:

Detection Assistance: Provide hints or accelerate anomaly discovery.
Narrative Integration: AI characters will have distinct personalities, influenced by player interactions.
Technical Challenges
Scalability of Data Handling

Current reliance on a static CSV file limits the scope of anomalies. Potential migration to a database or API is under consideration.
Randomization Algorithms

Ensuring variability without repetition or predictability is key to maintaining player engagement.
Audio Playback Issues

Modern browser restrictions on autoplay require robust workarounds to ensure seamless audio integration.
Current Status
The core game loop is operational, including:

Terminal simulation with basic scanning functionality.
Anomaly detection and ID assignment from CSV data.
Audio playback framework (pending resolution of autoplay restrictions).
Next Steps
Implement dialogue systems and branching outcomes.
Expand anomaly data set with unique narrative elements.
Optimize and modularize code for scalability and reusability.
