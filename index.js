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
// Retrieve all plant_species 
app.get('/plant_species', function (request, response) {
    dbConn.query('SELECT * FROM plant_species', function (error, results, fields) {
        if (error) throw error;
        return response.send({
            error: false, data: results, message: 'plant_species_list.' });
});
    });
    // Retrieve plant_species with id 
    app.get('/plant_species/:id', function (request, response) {
        let plant_species_id = request.params.id;
        if (!plant_species_id) {
            return response.status(400).send({
                error: true, message: 'Please provide plant_species_id' });
}
dbConn.query('SELECT * FROM plant_species where id=?', plant_species_id, function
                    (error, results, fields) {
                    if (error) throw error;
                    return response.send({
                        error: false, data: results[0], message:
                            'plant_species list.'
                    });
                });
        });
    // set port
    app.listen(3000, function () {
        console.log('Node app is running on port 3000');
    });
    module.exports = app;