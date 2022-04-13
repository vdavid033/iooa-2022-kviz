function getRandomBotanicalPlantID (){
    
    const json = require("./botanical_family.json");
    var botanicList = new Array();

    for(var i=0; i<4; i++){

    var index = Math.round(Math.random() * (json["data"].length - 1));

    botanic.push(json["data"][index]);
} 

    console.log(botanicList);

    return botanicList;
}