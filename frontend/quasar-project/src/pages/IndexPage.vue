<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-center">
    <div class="row">
      <div class="col"> <img alt="Quasar logo" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C130/production/_123665494_mediaitem123664184.jpg"></div>
    </div>

    <div class="fit row justify-center">
            <q-btn size="large" color="positive" label="Započnite kviz" href="#/kviz"/>
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
