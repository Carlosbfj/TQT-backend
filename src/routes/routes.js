const express = require("express");
const router = express.Router();

const routes = require("../services/routes");

/* GET routes */
router.get("/", async function (req, res, next) {
    try {
        res.json(await routes.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting routes`, err.message);
        next(err);
    }
});

module.exports = router;
