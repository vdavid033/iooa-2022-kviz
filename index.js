var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const dbConfig = require("./db.config.js");
var mysql = require("mysql");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// connection configurations
var dbConn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// connect to database
dbConn.connect();

// Retrieve all useful_part
app.get("/useful_part", function (request, response) {
  dbConn.query("SELECT * FROM useful_part", function (error, results, fields) {
    if (error) throw error;
    return response.send({
      error: false,
      data: results,
      message: "useful_part list.",
    });
  });
});

// Retrieve useful_part with id
app.get("/useful_part/:id", function (request, response) {
  let useful_part_id = request.params.id;
  if (!useful_part_id) {
    return response
      .status(400)
      .send({ error: true, message: "Please provide useful_part_id" });
  }
  dbConn.query(
    "SELECT * FROM useful_part where id=?",
    useful_part_id,
    function (error, results, fields) {
      if (error) throw error;
      return response.send({
        error: false,
        data: results[0],
        message: "useful_part list.",
      });
    }
  );
});

// Retrieve botanical_family with id
app.get("/botanical_family/:id", function (request, response) {
  let botanical_family_id = request.params.id;
  if (!botanical_family_id) {
    return response
      .status(400)
      .send({ error: true, message: "Please provide botanical_family_id" });
  }
  dbConn.query(
    "SELECT * FROM botanical_family where id=?",
    botanical_family_id,
    function (error, results, fields) {
      if (error) throw error;
      return response.send({
        error: false,
        data: results[0],
        message: "botanical_family list.",
      });
    }
  );
});

// Dohvat plant_species(biljna vrsta) preko id
app.get("/plant_species/:id", function (request, response) {
  let plant_species_id = request.params.id;
  if (!plant_species_id) {
    return response
      .status(400)
      .send({ error: true, message: "Please provide plant_species_id" });
  }
  dbConn.query(
    "SELECT * FROM plant_species where id=?",
    plant_species_id,
    function (error, results, fields) {
      if (error) throw error;
      return response.send({
        error: false,
        data: results[0],
        message: "plant_species list.",
      });
    }
  );
});

// Dohvat svih biljnih porodica
app.get("/botanical_family", function (request, response) {
  dbConn.query("SELECT * FROM botanical_family", function (error, results, fields) {
    if (error) throw error;
    return response.send({
      error: false,
      data: results,
      message: "botanical_family list.",
    });
  });
});

// set port
app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});
module.exports = app;
