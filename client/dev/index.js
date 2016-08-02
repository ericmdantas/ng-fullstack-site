import Vue from 'vue';

console.log('yo!')

new Vue({
  el: '#app',
  components: {
    'ng-fullstack-app': require('./app/index.js')
  }
});
