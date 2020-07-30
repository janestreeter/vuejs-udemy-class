import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

new Vue({
  el: '#container',
  render: h => h(App)
})
