const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = "availability.json";

// Functie om bestaande data te lezen
function readAvailabilityData() {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return {};
    }
    const rawData = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(rawData);
  } catch (err) {
    console.error("Fout bij het lezen van het bestand:", err);
    return {};
  }
}

// Functie om data op te slaan
function saveAvailabilityData(data) {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Fout bij het opslaan van data:", err);
  }
}

// API-endpoint om beschikbaarheid op te slaan
app.post("/save-availability", (req, res) => {
  const receivedData = req.body;
  const existingData = readAvailabilityData();

  const sectionKey = Object.keys(receivedData)[0];
  if (!sectionKey) {
    return res.status(400).json({ error: "Ongeldige data ontvangen" });
  }
  existingData[sectionKey] = receivedData[sectionKey];

  saveAvailabilityData(existingData);
  res.json({ message: `Data succesvol opgeslagen voor ${sectionKey}` });
});

// API-endpoint om beschikbaarheid op te vragen
app.get("/availability", (req, res) => {
  const data = readAvailabilityData();
  res.json(data);
});

app.listen(8000, () => {
  console.log("Server draait op http://localhost:8000");
});
