var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const dbConfig = require("../iooa-2022/db.config.js");
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// connection configurations
var dbConn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
// connect to database
dbConn.connect();
/*app.get('/plant_species/:id',async function ( request, response) {
    let plant_species_id = request.params.id;
    dbConn.query('select plant_species.croatian_name Vrsta, botanical_family.latin_name, botanical_family.croatian_name from botanical_family left join genus on botanical_family.id = genus.botanical_family_id left join plant_species on genus.id=plant_species.id where plant_species.id=?', [plant_species_id], function (error, results, fields){
    if (error) throw error;
    return response.send({error: false, data: results, message: 'plant_speices.' });
    })}
);
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;*/
function getBotanicalFamilyFromPlantSpecies(id) {
    return new Promise(function (resolve, reject) {
        const sqlSelect =
            "select plant_species.croatian_name Vrsta, botanical_family.latin_name, botanical_family.croatian_name from botanical_family left join genus on botanical_family.id = genus.botanical_family_id left join plant_species on genus.id=plant_species.id where plant_species.id=?;";

        dbConn.query(sqlSelect, [id], function (err, res) {
            if (res === undefined) {
                reject(new Error("Resultati query-ja su undefined"));
            } else {
                resolve(res);
            }
        });
    });
}
app.get("/plant_species/:id", (req, res) => {
    getBotanicalFamilyFromPlantSpecies(req.params.id).then((result) => {
        res.send({ error: false, data: result, message: "botanic family from plant species id" });
    });
});
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;