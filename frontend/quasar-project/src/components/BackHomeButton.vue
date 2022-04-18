<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn style="background: #FF0080; color: white" :label="caption" :href="link" />
    <q-btn flat style="color: #FF0080" :label="caption" :href="link" />
    <q-btn style="background: goldenrod; color: white" :label="caption" :href="link" />
    <q-btn outline style="color: goldenrod;" :label="caption" :href="link" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackHomeButton',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: 'Povratak'
    },

    link: {
      type: String,
      default: '/'
    }
  }
})
</script>