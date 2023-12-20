const {pool} = require("pg")

const pool = new pool()

module.exports = {
    query: (text,params) => pool.query(text, params),
}