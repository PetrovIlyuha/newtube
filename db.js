const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log(" ✔ Newtube database connected");
const handleError = error => console.log(`❌DB connection error: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
