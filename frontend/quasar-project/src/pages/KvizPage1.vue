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
      <q-btn
        color="white"
        text-color="black"
        label="Sljedece"
        @click="
          getRandomBotanicalPlant();
          randomPlant();
        "
      />
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
            <q-item-label id="option-0-random"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="color" val="orange" color="orange" />
          </q-item-section>
          <q-item-section>
            <q-item-label id="option-1-random"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-radio v-model="color" val="cyan" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label id="option-2-random"></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="white"
        text-color="black"
        label="Prihvati odgovor"
        @click="alert = true"
      />
      <q-btn
        color="white"
        text-color="black"
        label="Završi i predaj"
        @click="zavrsniPopup = true"
      />

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ tocnostOdgovora }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> Tekst ide tu! </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

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

// varijabla u koju se sprema naziv biljke iz random generiranog pitanja
var randomGeneratedPlant;
var tocnostOdgovora = "Netočno";
var brojTocnih = "2";
var brojNetocnih = "1";

export default {
  setup() {
    return {
      color: ref("cyan"),
      alert: ref(false),
      zavrsniPopup: ref(false),
      brojTocnih,
      brojNetocnih,
      tocnostOdgovora,
      if() {
        tocnostOdgovora = "Točno";
      },
    };
  },
  methods: {
    async randomPlant() {
      const jsonObject = await this.$axios.get(
        `http://localhost:3000/plant_species/`
      );
      var randomPlant =
        jsonObject.data.data[
          Math.floor(Math.random() * jsonObject.data.data.length)
        ];
      this.plant = randomPlant;
      var myNode = document.getElementById("pitanje");
      while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
      var i = "Kojoj botaničkoj porodici pripada ";
      // console.log(this.plant.id)

      document.getElementById("pitanje").append(i);
      document.getElementById("pitanje").append(this.plant.croatian_name);
    },

    async getRandomBotanicalPlant() {
      const json = require("./botanical_family.json");
      // console.log(this.plant.id)
      // const test = await this.$axios.get(
      //   `http://localhost:3000/botanical_family_plant_species/${this.plant.id}`
      // );
      // console.log(test.data)
      //privremena lista
      var botanicList = new Array();
      for (var i = 0; i < 3; i++) {
        var botanicObject = {};
        var index = Math.round(Math.random() * (json["data"].length - 1));
        botanicObject["id"] = json["data"][index].id;
        botanicObject["croatian_name"] = json["data"][index].croatian_name;
        botanicObject["latin_name"] = json["data"][index].latin_name;
        botanicList.push(botanicObject);
      }
      // u ova dva elementa postavlja se random vrijednost iz botanical_family,
      // to su dva radio botuna
      if (botanicList[0].croatian_name != botanicList[1].croatian_name) {
        // min = 1, max = 4
        var randomNumber = this.generateRandomNumber(1, 4);
        switch (randomNumber) {
          case 1:
            var tempList = [0, 1, 2];
            break;
          case 2:
            var tempList = [0, 2, 1];
            break;
          case 3:
            var tempList = [1, 0, 2];
            break;
          case 4:
            var tempList = [1, 2, 0];
            break;
          default:
            break;
        }

        document.getElementById("option-" + tempList[0] + "-random").innerHTML =
          botanicList[0].croatian_name;
        document.getElementById("option-" + tempList[1] + "-random").innerHTML =
          botanicList[1].croatian_name;
        document.getElementById("option-" + tempList[2] + "-random").innerHTML =
          "Tocan odgovor!";
      }
    },

    getCorrectAnswerFromBotanicalFamily() {
      // TODO uzeti varijablu randomGeneratedPlant i potražiti njenu botanicku vrstu
      // i ispisati je u jednu labelu od nasumucnog radio botuna
    },

    // helper funkcije
    reloadPage() {
      window.location.reload();
    },

    generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  data() {
    return {
      plant: "",
    };
  },
};
</script>
