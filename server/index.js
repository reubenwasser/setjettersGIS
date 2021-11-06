const express = require('express')
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: 'setjetters1.c2ipvnggy6hj.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'NumberSheep'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get/locations", (req, res) => {
    const locationsSelect = "SELECT * FROM setjetters_export.real_locations WHERE lng IS NOT NULL"
    db.query(locationsSelect, (err, result) => {
        res.send(result);
    })
})

app.get("/api/get/cities", (req, res) => {
    const locationsSelect = "SELECT * FROM setjetters_export.cities WHERE lng IS NOT NULL"
    db.query(locationsSelect, (err, result) => {
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("running on port 3001")
})