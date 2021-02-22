const express = require("express"),
  serveStatic = require("serve-static"),
  history = require("connect-history-api-fallback"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  path = require("path"),
  cors = require("cors");

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

//access points
app.use(enforce.HTTPS({ trustProtoHeader: true }));
//serve all files
app.use(serveStatic(__dirname + "/dist/spa"));
//running history fix router history issues
app.use(history());
// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//bypass proxy
app.use(cors());
// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(port, () => console.log(`Serer started at ${port}`));
