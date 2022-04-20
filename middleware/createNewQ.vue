
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Novo pitanje"
      @click="generateQ"
     />
    <div id="pitanje"></div>
  </div>


</template>

<script>

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NewQButton',
  
    methods: {
      generateQ(){
      
        var myNode=document.getElementById("pitanje");
          while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }

        var i="Kojoj botaničkoj porodici [botanička porodica, lat.naziv] pripada ";
        var id=getRandomPlantSpeciesID();
        document.getElementById("pitanje").append(i);
        document.getElementById("pitanje").append(id);
      
      }
    
    }
 
  
})


//console.log(div.textContent);
const pitanje = document.getElementById("pitanje");
function getRandomPlantSpeciesID()
 {
     // Ucitavanje json datoteke
     const jsonObject = require('./plant_species.json');
     
     // varijabla u kojoj ce se premiti random id
     var randomPlantID = jsonObject["data"][Math.floor(Math.random() * jsonObject["data"].length)];

    console.log(jsonObject["data"].length);
     // ispis na konzolu za provjeru
    // console.log(randomPlantID.id);
   // console.log(randomPlantID["id"]+[jsonObject.data[randomPlantID.id].croatian_name]);
   
    //console.log(randomPlantID.id);
  
      
     // rezultat
     return jsonObject.data[randomPlantID["id"]].croatian_name;
 }


</script>
