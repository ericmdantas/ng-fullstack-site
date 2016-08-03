import './face.css';

module.exports = {
  data() {

  },
  ready() {
    console.log('face ready')
  },
  template: require('./face.html'),
  components: {
    'n-logo': require('../logo/index.js'),
    'n-badge': require('../badge/index.js')
  }
}
