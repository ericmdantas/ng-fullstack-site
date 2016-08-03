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
    'n-face': require('../face/index.js'),
    'n-stack': require('../stack/index.js'),
    'n-simulation': require('../simulation/index.js'),
    'n-footer': require('../footer/index.js')
  }
}
