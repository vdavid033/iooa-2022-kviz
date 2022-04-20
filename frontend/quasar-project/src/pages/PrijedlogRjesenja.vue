<template>
  <div class="q-pa-md">
    <div class="q-px-sm">
     1. Odaberite hrvatski i latinski naziv biljne porodice za prikazanu biljnu vrstu  <strong>{{ shape }}</strong>
    </div>
  <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
      color="green"
      type="checkbox"
    />
  </div>
    <div>
        <q-btn label="Odaberi" type="submit" color="blue"/>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      group: ref('option1'),
      options: [
        { label: 'correct_croatian_latin_name', value: 'option1', color: 'blue' },
        { label: 'croatian_latin_name_1', value: 'option2', color: 'blue' },
        { label: 'croatian_latin_name_2', value: 'option3', color: 'blue'},
        { label: 'croatian_latin_name_3', value: 'option4', color: 'blue' },
      ]
    }
  }
}
</script>
