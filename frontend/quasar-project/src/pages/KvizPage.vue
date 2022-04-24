<template>
<div class="absolute-top-right">
     <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
     label="Početna stranica"  
     color="green" 
     icon="home" 
     />

  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Prethodno" />
    <q-btn-group>
      <q-btn color="secondary" glossy label="1" />
      <q-btn color="secondary" glossy label="2" />
      <q-btn color="secondary" glossy label="3" />
      <q-btn color="secondary" glossy label="4" />
    </q-btn-group>
    <q-btn color="white" text-color="black" label="Sljedece" />
  </div>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        5. Pitanje - Kojoj botaničkoj porodici pripada ljubičica?
        <q-img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Violet.JPG"
          :ratio="16 / 9"
        />
      </div>
    </div>
  </div>
  <div class="q-pa-md">
     <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="violaceae" color="green" @click = "selection = true"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Violaceae</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="amaryllidaceae" color="red" @click = "selection = false"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Amaryllidaceae</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="asteraceae" color="red" @click = "selection = false"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Asteraceae</q-item-label>
        </q-item-section>
      </q-item>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Prihvati odgovor" @click="confirm = true"/>
    <q-btn color="white" text-color="black" label="Završi i predaj" />
  </div>
  <div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="q-pt-none">
          Odabrali ste <strong> {{ color }}</strong>
        </q-card-section>
        <q-card-section>
          Točan odgovor je violaceae
        </q-card-section>
        <q-card-section>
          Vaš odgovor je <strong> {{selection}} </strong>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
        </q-card-actions>

      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      confirm: ref(false),
      color: ref("cyan"),
      selection: ref(false),

    }
  },
};
</script>
