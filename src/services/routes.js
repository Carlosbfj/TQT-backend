const db = require("./db");

async function getMultiple() {
    const rows = await db.query(`SELECT * FROM rute`);

    return rows;
}

module.exports = {
    getMultiple,
};
