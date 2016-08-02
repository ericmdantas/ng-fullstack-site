import Vue from 'vue';

console.log('yo!')

new Vue({
  el: '#app',
  components: {
    'n-app': require('./app/index.js')
  }
});
