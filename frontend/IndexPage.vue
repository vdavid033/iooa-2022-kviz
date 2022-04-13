<template>
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
        5. Pitanje - Kojoj botaničkoj porodici pripada (naziv biljke)?
        <q-img
          src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
          :ratio="16 / 9"
        />
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <q-option-group :options="options" type="radio" v-model="group" />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Prihvati odgovor" />
    <q-btn color="white" text-color="black" label="Završi i predaj" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      group: ref(null),

      options: [
        { label: "Odgovor 1", value: "imebiljke1", color: "green" },
        { label: "Odgovor 2", value: "imebiljke2", color: "red" },
        { label: "Odgovor 3", value: "imebiljke3" },
      ],
    };
  },
};
</script>
