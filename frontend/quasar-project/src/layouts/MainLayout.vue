<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-positive text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          href="/"
          label="Početna stranica"
          color="white"
          flat
          icon="directions"
        />
        <q-toolbar-title class="text-weight-medium text-center text-h3">
          <q-avatar>
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C130/production/_123665494_mediaitem123664184.jpg"
            />
          </q-avatar>
          Dobrodošli u kviz o biljnim vrstama
        </q-toolbar-title>

        <q-btn
          href="http://agro.veleri.hr/biljne-vrste/"
          label="Glavna stranica"
          color="white"
          flat
          icon="home"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    title: "Link test",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
