<template>
  <div class="q-pa-md">
    <div class="q-px-sm">
      Odaberi točan croatian_name i latin_name biljne porodice za biljnu vrstu: (prikaz podataka iz tablice plant)  <strong>{{ shape }}</strong>
    </div>
    <q-option-group
      :options="options"
      type="radio"
      v-model="group"
    />
    <div>
        <q-btn label="Potvrdi" type="submit" color="green-6"/>
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
        { label: 'random_croatian_latin_name', value: 'option1', color: 'green' },
        { label: 'random_croatian_latin_name', value: 'option2', color: 'green' },
        { label: 'random_croatian_latin_name', value: 'option3', color: 'green'},
        { label: 'correct_croatian_latin_name', value: 'option4', color: 'green' },
      ]
    }
  }
}
</script>
