import Vue from 'vue';

console.log('yo!')

new Vue({
  el: '#app',
  components: {
    'ng-fullstack-header': require('./header/index.js'),
    'ng-fullstack-footer': require('./footer/index.js')
  }
});
