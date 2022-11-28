const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/ping", (req, res) => {
    res.send("pong ");
});

app.listen(8080, () => console.log("API server is runnin.."));
