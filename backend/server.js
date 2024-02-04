const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");
const ProfileMessage = require("./ProfileMessagesSchema.js");

app.use(express.static(path.join(__dirname, "public")));
require("dotenv").config({ path: __dirname + "/.env" });

const port =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_PORT
    : process.env.PORT;

try{
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "PortfolioMessage",
  });
  
  mongoose.connection.on("connected", () => {
    console.log("mongoose is connected!!");
  });
}catch(error){
    console.log("Error connecting with mongoDB.", error)
}


app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

const temp = [];

app.post("/contact/messages", (req, res) => {
  temp.push(req.body);
  const newProfileMessage = new ProfileMessage(req.body);

  newProfileMessage.save((err) => {
    if (err) {
      console.error("Error while saving data.", err);
    } else {
    }
  });
  res.send("Data saved.");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/contact/messages", (req, res) => {
  res.json(temp);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
