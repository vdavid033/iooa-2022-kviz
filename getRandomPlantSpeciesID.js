/* Naziv funkcije: getRandomPlantSpeciesID()
   Kreator: Filip Stropin
   Datum: 01.04.2022.
   __________________________________________________________________________________
 *funkcija uzima prethodno kreiran json dokument koji sadrzi sve biljne vrste.
 *koristeci metodu marth.random, uzima se nasumicna "id" vrijednost iz "data" kljuca
 *kao rezultat funkcije vraca se id vrijednost*/

 function getRandomPlantSpeciesID()
 {
     // Ucitavanje json datoteke
     const jsonObject = require('./plant_species.json');
     
     // varijabla u kojoj ce se premiti random id
     var randomPlantID = jsonObject["data"][Math.floor(Math.random() * Object.keys(jsonObject).length)];
 
     // ispis na konzolu za provjeru
     console.log(randomPlantID.id);
 
     // rezultat
     return randomPlantID.id;
 }