<template>

<div class="relative fixed-center">
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Prethodno" />
    <q-btn-group>
      <q-btn color="secondary" glossy label="1" />
      <q-btn color="secondary" glossy label="2" />
      <q-btn color="secondary" glossy label="3" />
      <q-btn color="secondary" glossy label="4" />
    </q-btn-group>
    <q-btn color="white" text-color="black" label="Sljedece"  @click="getRandomBotanicalPlant"/>
  </div>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div id class="col-4 full-width">
        <div id="pitanje"></div>
        <q-img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Violet.JPG"
          :ratio="16 / 9"
        />
      </div>
    </div>
  </div>
  <!--Radio dugmad-->
  <div class="q-pa-md">
    <q-list>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label id="option-1-random">{{ optionRandom1 }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="orange" color="orange" />
        </q-item-section>
        <q-item-section>
          <q-item-label id="option-2-random"></q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-radio v-model="color" val="cyan" color="cyan" />
        </q-item-section>
        <q-item-section>
          <q-item-label id="option-3-random"></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Prihvati odgovor" @click="confirm = true"/>
    <q-btn color="white" text-color="black" label="Završi i predaj" />
  </div>

</div>
</template>

<script>
import { ref } from "vue";

var botanicList = new Array;
// varijabla u koju se sprema naziv biljke iz random generiranog pitanja
var randomGeneratedPlant;

export default {
  setup() {
    return {
      color: ref('cyan')
    }
  },
  methods:
  {
 /*   async allPlants() {
      const plants = await this.$axios.get(
      `http://localhost:3000/plant_species/`
      );
      console.log(plants.data.data[0]);
      this.plants = plants.data.data;
      },  */
   generateQ(){
      
        var myNode=document.getElementById("pitanje");
          while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
        var i="Kojoj botaničkoj porodici pripada ";
        var id=getRandomPlantSpeciesID();
        document.getElementById("pitanje").append(i);
        document.getElementById("pitanje").append(id);
      
      },

    getRandomBotanicalPlant()
    {

      const json = require("./botanical_family.json");

      for(var i=0; i<3; i++)
      {
        var botanicObject = {}
        var index = Math.round(Math.random() * (json["data"].length - 1));
        botanicObject["id"] = json["data"][index].id;
        botanicObject["croatian_name"] = json["data"][index].croatian_name;
        botanicObject["latin_name"] = json["data"][index].latin_name;
        botanicList.push(botanicObject);
      }
      // u ova dva elementa postavlja se random vrijednost iz botanical_family,
      // to su dva radio botuna
      if (botanicList[0].croatian_name != botanicList[1].croatian_name)
      {
        document.getElementById("option-1-random").innerHTML = botanicList[0].croatian_name;
        document.getElementById("option-2-random").innerHTML = botanicList[1].croatian_name;
        return;
      }

      else
      {
        getRandomBotanicalPlant();
      }
    },

    getCorrectAnswerFromBotanicalFamily()
    {

    }

  },
 /* data() {
  //  return {
   // plants: "",
     // }
  }  */
}
const pitanje = document.getElementById("pitanje");
function getRandomPlantSpeciesID()
 {
     // Ucitavanje json datoteke
     const jsonObject = require('./plant_species.json');
     var jsonLength=jsonObject["data"].length;

     // varijabla u kojoj ce se premiti random id
     var randomPlantID = jsonObject["data"][Math.floor(Math.random() * (jsonObject["data"].length))];

     // sprema se i u globalnu varijablu za generiranje tocnog odgovora
     randomGeneratedPlant = randomPlantID.croatian_name;

     // rezultat
     return [randomPlantID.croatian_name];
 }
</script>
