import './face.css';

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
      height: `${document.body.offsetHeight - 50}px`
    }
  },
  template: require('./face.html'),
  components: {
    'n-logo': require('../logo/index.js'),
    'n-badge': require('../badge/index.js')
  }
}
