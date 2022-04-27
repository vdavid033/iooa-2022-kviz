<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem_dugme }}
      </q-card-section>
    </q-card>
    <div class="q-pa-md q-gutter-sm">
      <q-btn @click="reloadPage()" color="white" text-color="black" label="Novo pitanje" />
    </div>
    <div class="q-pa-lg">
      <q-option-group id="grupa"
        v-model="group"
        :options="options"
        color="primary"
      />
    </div>
    <q-card class="my-card">
      <q-card-section>
        {{ lorem_radio_lista }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'
var botanicList = new Array;
function getRandomBotanicalPlant(){
    
    const json = require("./botanical_family.json");
    
    for(var i=0; i<4; i++)
    {
      var botanicObject = {}
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
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  setup () {
    return {
      group: ref('op1'),

      options: [
        {
          label: botanicList[1].croatian_name,
          value: 'op1'
        },
        {
          label: botanicList[2].croatian_name,
          value: 'op2'
        },
        {
          label: botanicList[3].croatian_name,
          value: 'op3'
        }
      ],
      lorem_dugme: 'Pritiskom na gumb pozvati će se metoda koja bi trebala uzeti dvije nasumične vrijednosti iz json datoteke sa popisom svih botaničkih vrsti, te jednu koja je točan odgovor i nasumično popuniti "value" properti QOptionGroup sa desne strane. Nakon prvog pokretanja ove metode, vrijednosti se spremaju u pribremenu varijablu te se , ukoliko se korisnik vrati na isto pitanje, tada vrijednosti uzimaju iz nje.',
      lorem_radio_lista: 'getRandomBotanicalPlant()'
      //lorem_radio_lista: 'Za prijedloge sa odgovorima koristila bi se komponenta QOptionGroup. Implementacija se može vidjeti u samom kodu.'
    }
  }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
