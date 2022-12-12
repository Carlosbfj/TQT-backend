const express = require("express");
const { acceptsLanguage } = require("express/lib/request");
const app = express();
const port = 8080;
const routes = require("./src/routes/routes");

//Middleware
app.use(express.json);
app.use(
    express.urlencoded({
        extended: true,
    })
);

//routes
app.get("/ping", (req, res) => {
    res.send("pong");
});

app.get("/posts", (req, res) => {
    res.send("We are on posts");
});

//app.use("/routes", routes);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.stack(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => console.log(`API server is runnin in port ${port}`));
