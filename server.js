const dotenv = require("dotenv");
const express = require("express");
const next = require("next");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
dotenv.config();

// CONNECT DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected :D");
  })
  .catch((e) => {
    console.log(e);
  });

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.use(bodyParser.json());
  // add custom path here
  // server.post('/request/custom', custom);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 7703;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
