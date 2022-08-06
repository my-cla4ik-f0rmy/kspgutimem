import Vue from 'https://unpkg.com/vue@3'
import script from './test/script.vue'

Vue.component('picked', picked)
export default {
  setup() {
    const count = picked
    return { count }
  }
}


alert(count)