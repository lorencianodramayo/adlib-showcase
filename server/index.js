const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const routes = require("./routes/api");

//Database config
const MONGODB_URI =
  "mongodb+srv://cianoInnov:W4d1w4dz@showcase.2m5rz.mongodb.net/showcase?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//bypass proxy
app.use(cors());
// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(port, () => console.log(`Serer started at ${port}`));
