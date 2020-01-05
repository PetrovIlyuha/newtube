import "./db";
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const Video = require("./models/Video");

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✔ Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
