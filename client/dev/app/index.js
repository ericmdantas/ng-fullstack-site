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
    'n-header': require('../header/index.js'),
    'n-footer': require('../footer/index.js'),
    'n-logo': require('../logo/index.js'),
    'n-badge': require('../badge/index.js')
  }
}
