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
    'ngf-header': require('../header/index.js'),
    'ngf-footer': require('../footer/index.js'),
    'ng-fullstack-logo': require('../common/logo.js'),
    'ngf-badge': require('../badge/index.js')
  }
}
