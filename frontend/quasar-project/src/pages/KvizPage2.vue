<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="All plants" @click="allPlants" />
    </div>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="plant in plants"
          v-bind:key="plant.id"
          @click="onePlant(plant.id)"
        >
          <q-item-section>{{ plant.croatian_name }}</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        v-bind:key="plant.id"
      >
        <q-card-section>
          <div class="text-h6">Naziv: {{ plant.croatian_name }}</div>
          <div class="text-subtitle2">Lat.naziv: {{ plant.latin_name }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Opis: {{ plant.description }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async allPlants() {
      const plants = await this.$axios.get(
        `http://localhost:3000/plant_species/`
      );
      console.log(plants.data.data[0]);
      this.plants = plants.data.data;
    },
    async onePlant(id) {
      const plant = await this.$axios.get(
        `http://localhost:3000/plant_species/` + id
      );
      console.log(plant.data.data);
      this.plant = plant.data.data;
    },
  },
  data() {
    return {
      plants: "",
      plant: "",
    };
  },
};
</script>