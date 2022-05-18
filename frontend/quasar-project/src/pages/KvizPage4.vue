<template>
  <div class="relative fixed-center">
    <p>Pitanje: <a id="clicks">1</a></p>
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
        @click="
          getRandomBotanicalPlant();
          randomPlant();
        "
      /> -->
    </div>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div id class="col-4 full-width">
          <div id="pitanje">{{ state.pitanje }}</div>
          <q-img
            width="500px"
            height="300px"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Violet.JPG"
            :ratio="16 / 9"
          />
        </div>
      </div>
    </div>
    <!--Radio buttons-->
    <!-- Prolazi kroz listu odgovora i za svaki dodaje radio button -->
    <div class="q-pa-md odgovori">
      <q-radio
        v-for="odgovor in state.odgovori"
        v-bind:key="odgovor"
        v-model="state.odabraniOdgovor"
        :val="odgovor.id"
        :label="odgovor.croatian_name"
        color="teal"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        id="PrihvatiOdgovor"
        color="white"
        text-color="black"
        label="Prihvati odgovor"
        @click="
        prikaziGumb();
        brPitanja();
        getRandomBotanicalPlant();
        randomPlant();
        state.alert = true;
        "
      />
      <q-btn
        id="PrihvatiIZavrsi"
        color="white"
        text-color="black"
        label="Završi i predaj"
        @click="state.zavrsniPopup = true"
        disabled
      />
<q-btn
        id="Refresh"
        color="white"
        text-color="black"
        label="Ponovno pokreni kviz"
        disabled
      />
      <q-dialog v-model="state.alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              {{
                state.odabraniOdgovor === state.tocanOdgovor.id
                  ? "Točno!"
                  : "Netočno!"
              }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{
              state.odabraniOdgovor === state.tocanOdgovor.id
                ? state.tocanOdgovor.croatian_name + " je točan odgovor!"
                : "Točan odgovor je " + state.tocanOdgovor.croatian_name
            }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="OK"
              color="primary"
              @click="
                close
              "
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="state.zavrsniPopup">
        <q-card>
          <q-card-section>
            <div class="text-h6">Rezultat</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Broj tocnih odgovora: {{ state.brojTocnih }}
          </q-card-section>
          <q-card-section class="q-pt-none">
            Broj netocnih odgovora: {{ state.brojNetocnih }}
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
import { onMounted, reactive } from "vue";
import { axios } from "../boot/axios";
var clicks = 1;
export default {
  setup() {
    const state = reactive({
      plant: {},
      pitanje: "",
      odgovori: [],
      odabraniOdgovor: {},
      tocanOdgovor: {},
      brojTocnih: 0,
      brojNetocnih: 0,
      alert: false,
      zavrsniPopup: false,
    });

    onMounted(async () => {
      await randomPlant();
      await getRandomBotanicalPlant();
    });

    // funkcija koja dohvaca random plant species i postavlja vrijednost u state.plant
    async function randomPlant() {
      const jsonObject = await axios.get(
        `http://localhost:3000/plant_species/`
      );
      let randomPlant =
        jsonObject.data.data[
          Math.floor(Math.random() * jsonObject.data.data.length)
        ];

      // plant se sprema u state.plant
      state.plant = randomPlant;

      // u state.pitanje spremamo tekst pitanja
      state.pitanje =
        "Kojoj botaničkoj porodici pripada " + state.plant.croatian_name;
    }

    // funkcija koja dohvaca random botanicke vrste i postavlja ih u listu odgovora state.odgovori
    async function getRandomBotanicalPlant() {
      const json = await axios.get(`http://localhost:3000/botanical_family`);
      const botanicalFamily = json.data.data;

      // funkcija koja dohvaca tocan odgovor i sprema ga u state.tocanOdgovor
      await getCorrectAnswerFromBotanicalFamily();

      let botanicList = [];

      // dok lista nema 2 odgovora, trazi i dodaj novi
      while (botanicList.length < 2) {
        let index = Math.round(Math.random() * (botanicalFamily.length - 1));
        let botanicObject = {
          id: botanicalFamily[index].id,
          croatian_name: botanicalFamily[index].croatian_name,
          latin_name: botanicalFamily[index].latin_name,
        };
        // dodaje odgovor u listu samo ako takav odgovor vec ne postoji i ako odgovor nije jednak tocnom odgovoru
        if (
          botanicObject.id !== botanicList[0]?.id &&
          botanicObject.id !== state.tocanOdgovor?.id
        ) {
          botanicList.push(botanicObject);
        }
      }
      // nakon sto u listi odgovora imamo 2 razlicita odgovora, u listu dodajemo tocan odgovor
      botanicList.push(state.tocanOdgovor);

      // pitanja u listi se sortiraju kako bi poredak bio random
      state.odgovori = botanicList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      // prvi odgovor u listi postavlja se kao selektirani
      state.odabraniOdgovor = state.odgovori[0].id;
    }

    // funkcija dohvaca tocan odgovor za random plant species -> state.plant
    async function getCorrectAnswerFromBotanicalFamily() {
      const json = await axios.get(
        `http://localhost:3000/botanical_family_plant_species/${state.plant.id}`
      );
      state.tocanOdgovor = json.data.data;
    }

    return {
      state,
      randomPlant,
      getRandomBotanicalPlant,
      getCorrectAnswerFromBotanicalFamily,
    };
  },
  methods: {

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
          button2.removeAttribute("disabled", false);
          button3.removeAttribute("disabled", false);
          button2.innerHTML = "Prihvati i zavrsi";
          button1.setAttribute("disabled", true);
        }
      }
      button1.addEventListener("click", buttonPressed, true);
      button3.onclick = () => {
        window.location.reload();
      };
    },

    brPitanja() {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
    },
  },
};
</script>
<style>
.odgovori {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
</style>
