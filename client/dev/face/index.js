import './face.css';

module.exports = {
  template: require('./face.html'),
  components: {
    'n-logo': require('../logo/index.js'),
    'n-badge': require('../badge/index.js')
  }
}
