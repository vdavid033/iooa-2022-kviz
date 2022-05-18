<template>
  <div class="relative fixed-center">
    <div class="q-pa-md q-gutter-sm">
      
      <!-- <q-btn color="white" text-color="black" label="Prethodno" />
      <q-btn-group>
        <q-btn color="secondary" glossy label="1" />
        <q-btn color="secondary" glossy label="2" />
        <q-btn color="secondary" glossy label="3" />
        <q-btn color="secondary" glossy label="4" />
      </q-btn-group>
      <q-btn
        color="white"
        text-color="black"
        label="Sljedece"
        @click="generateQ"
      /> -->
    </div>
    <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-green text-white">
      <div id class="text-h5 h5 full-width">
          <span><a id="clicks">0</a>. </span> <span id="pitanje">
          </span>
          </div>
    </q-banner>
          <q-img width="700px" height="400px"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Violet.JPG"
            :ratio="16 / 9"
          />

      
  </div>
   <!-- <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div id class="col-4 full-width">
          <p> <a id="clicks">0</a> </p> <div id="pitanje">
          </div>
          <q-img width="500px" height="300px"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Violet.JPG"
            :ratio="16 / 9"
          />
        </div>
      </div>
    </div> -->
    <div class="q-pa-lg">
      <q-option-group
        id="grupa"
        v-model="group"
        :options="options"
        color="primary"
      />
    </div>

    <div class="q-pa-md q-gutter-sm">
      <button
        id="PrihvatiOdgovor"
        color="white"
        text-color="black"
        @click="prikaziGumb(), generateQ(), brPitanja()"
      >
        Prihvati odgovor
      </button>
      <button
        id="PrihvatiIZavrsi"
        color="white"
        text-color="black"
        @click="zavrsniPopup = true"
        hidden
      >
        Prihvati i zavrsi
      </button>
      <button id="Refresh" color="white" text-color="black" hidden>
        Refresh
      </button>
      <q-dialog v-model="zavrsniPopup">
        <q-card>
          <q-card-section>
            <div class="text-h6">Rezultat</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Broj tocnih odgovora: {{ brojTocnih }}
          </q-card-section>
          <q-card-section class="q-pt-none">
            Broj netocnih odgovora: {{ brojNetocnih }}
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
var botanicList = new Array();
var brojTocnih = "2";
var brojNetocnih = "1";
var clicks = 0;

function getRandomBotanicalPlant() {
  const json = require("./botanical_family.json");
  for (var i = 0; i < 4; i++) {
    var botanicObject = {};
    var index = Math.round(Math.random() * (json["data"].length - 1));
    botanicObject["id"] = json["data"][index].id;
    botanicObject["croatian_name"] = json["data"][index].croatian_name;
    botanicObject["latin_name"] = json["data"][index].latin_name;
    botanicList.push(botanicObject);
  }
  // console.log(botanicList);
  // return botanicList;
}
getRandomBotanicalPlant();
export default {
  setup() {
    return {
      confirm: ref(false),
      selection: ref(false),
      zavrsniPopup: ref(false),
      brojTocnih,
      brojNetocnih,
      index: 0,
      group: ref("op1"),
      options: [
        {
          label: botanicList[1].croatian_name,
          value: "op1",
        },
        {
          label: botanicList[2].croatian_name,
          value: "op2",
        },
        {
          label: botanicList[3].croatian_name,
          value: "op3",
        },
      ],
    };
  },

  methods: {
    
    async allPlants() {
      const plants = await axios.get(`http://localhost:3000/plant_species/`);
      const jsonObject = plants.data.data;
      var jsonLength = jsonObject.length;
      var randomPlantID = jsonObject[Math.floor(Math.random() * jsonLength)];
      var naziv = randomPlantID.croatian_name;
      return naziv;
    },
    brPitanja() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    },

    generateQ() {
      var myNode = document.getElementById("pitanje");
      while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
      var i = "Kojoj botaničkoj porodici pripada ";

      Promise.resolve(this.allPlants()).then((value) => {
        document.getElementById("pitanje").append(value);
      });
      document.getElementById("pitanje").append(i);
    },

    prikaziGumb() {
      console.log("test");
      ("use strict");
      let button1 = document.getElementById("PrihvatiOdgovor");
      let button2 = document.getElementById("PrihvatiIZavrsi");
      let button3 = document.getElementById("Refresh");
      let count = 0;
      function buttonPressed(e) {
        count++;
        if (count === 9) {
          button2.removeAttribute("hidden", false);
          button3.removeAttribute("hidden", false);
          button2.innerHTML = "Prihvati i zavrsi";
          button1.setAttribute("hidden", true);
        }
      }
      button1.addEventListener("click", buttonPressed, true);
      button3.onclick = () => {
        window.location.reload();
      };
    },

    brojacGumba() {
      var clicks = 0;
      function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
      }
    },
  },
  data() {
    return {
      plants: "",
    };
  },
};
</script>
