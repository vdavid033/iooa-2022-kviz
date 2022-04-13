var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const dbConfig = require("./db.config.js");
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
// Retrieve all useful_part
app.get('/useful_part', function (request, response) {
dbConn.query('SELECT * FROM useful_part', function (error, results, fields) {
if (error) throw error;
return response.send({ error: false, data: results, message: 'useful_partlist.' });
});
});
// Retrieve useful_part with id
app.get('/useful_part/:id', function (request, response) {
let useful_part_id = request.params.id;
if (!useful_part_id) {
return response.status(400).send({ error: true, message: 'Please provideuseful_part_id' });
}
dbConn.query('SELECT * FROM useful_part where id=?', useful_part_id, function
(error, results, fields) {
if (error) throw error;
return response.send({ error: false, data: results[0], message:
'useful_part list.' });
});
});
//dohvat svih biljnih vrsta za jednu botanicku porodicu #23
//biljna vrsta-plant_species
//botanicka porodica-botanical_family
//rod-genus
app.get('/plant_species_by_bf/:id', function (request, response) {
    let botanical_family_id = request.params.id;
    if (!botanical_family_id) {
    return response.status(400).send({ error: true, message: 'Please provide botanical_family_id' });
    }
    dbConn.query('SELECT ps.id, ps.croatian_name, ps.latin_name FROM plant_species ps left OUTER join genus g ON ps.genus_id=g.id left OUTER join botanical_family bf on g.botanical_family_id=bf.id where bf.id=?', botanical_family_id, function
    (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'plant_species list.' });
    });
    });


// set port
app.listen(3000, function () {
console.log('Node app is running on port 3000');
});
module.exports = app;
