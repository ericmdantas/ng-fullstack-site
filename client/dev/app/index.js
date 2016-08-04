import './app.css';

module.exports = {
  data() {
    return {
      css: {
        height: '0px'
      }
    }
  },
  ready() {
    this.css = {
      height: `${document.body.offsetHeight}px`
    }
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
