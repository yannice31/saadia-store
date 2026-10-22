const VERIFY_TOKEN = "peguiesanata";
const express = require("express");
const app = express();



// Vérification du webhook
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      res.status(200).send(challenge); // ✅ renvoie le challenge
    } else {
      res.sendStatus(403); // ❌ mauvais token
    }
  }
});

// Réception des messages
app.post("/webhook", (req, res) => {
  console.log("Message reçu :", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => console.log("🚀 Webhook actif sur Render"));
