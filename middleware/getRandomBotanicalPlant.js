function getRandomBotanicalPlant (){
    
    const json = require("./botanical_family.json");
    var botanicList = new Array();

    for(var i=0; i<4; i++){
    var botanicObject = {}
    var index = Math.round(Math.random() * (json["data"].length - 1));
    botanicObject["id"] = json["data"][index].id;
    botanicObject["croatian_name"] = json["data"][index].croatian_name;
    botanicObject["latin_name"] = json["data"][index].latin_name;
    botanicList.push(botanicObject);
} 

    console.log(botanicList);

    return botanicList;
}