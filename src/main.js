import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
      changeAge(AGE) {
            this.$emit('ageWasEdited', age);
       }
    }
});

new Vue({
  el: '#container',
  render: h => h(App)
})
