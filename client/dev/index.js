import Vue from 'vue';

console.log('yo!')

new Vue({
  el: '#app',
  components: {
    'ng-fullstack-header': require('./scripts/header.js'),
    'ng-fullstack-footer': require('./scripts/footer.js')
  }
});
