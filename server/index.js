const express = require('express')
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: '35.227.141.33',
    user: 'root',
    password: 'NumberSheep'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT lng, lat, `name` FROM setjetters_export.real_locations WHERE lng IS NOT NULL"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("running on port 3001")
})