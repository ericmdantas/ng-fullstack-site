import './app.css';

module.exports = {
  template: require('./app.html'),
  components: {
    'n-header': require('../header/index.js'),
    'n-face': require('../face/index.js'),
    'n-install': require('../install/index.js'),
    'n-stack': require('../stack/index.js'),
    'n-simulation': require('../simulation/index.js'),
    'n-footer': require('../footer/index.js')
  }
}
