import './app.css';

module.exports = {
  data() {
    return {

    }
  },
  ready() {
    console.log('app ready')
  },
  template: require('./app.html'),
  components: {
    'ng-fullstack-header': require('../header/index.js'),
    'ng-fullstack-footer': require('../footer/index.js'),
    'ng-fullstack-logo': require('../common/logo.js')
  }
}
