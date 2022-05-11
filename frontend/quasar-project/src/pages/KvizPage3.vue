<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="primary"
        label="All botanical families"
        @click="allBotanical"
      />
    </div>
    <div class="q-pa-md" style="max-width: 400px">
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="botanic in botanical"
          v-bind:key="botanic.id"
          @click="oneBotanic(botanic.id)"
        >
          <q-item-section>{{ botanic.croatian_name }}</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        v-bind:key="botanic.id"
      >
        <q-card-section>
          <div class="text-h6">Naziv: {{ botanic.croatian_name }}</div>
          <div class="text-subtitle2">Lat.naziv: {{ botanic.latin_name }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Opis: {{ botanic.description }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async allBotanical() {
      const botanical = await this.$axios.get(
        `http://localhost:3000/botanical_family/`
      );
      console.log(botanical.data.data[0]);
      this.botanical = botanical.data.data;
    },
    async oneBotanic(id) {
      const botanic = await this.$axios.get(
        `http://localhost:3000/botanical_family/` + id
      );
      console.log(botanic.data.data);
      this.botanic = botanic.data.data;
    },
  },
  data() {
    return {
      botanical: "",
      botanic: "",
    };
  },
};
</script>