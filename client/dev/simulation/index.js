import './simulation.css';

module.exports = {
  data() {

  },
  ready() {
    console.log('simulation ready')
  },
  template: require('./simulation.html'),
  components: {
    'n-structure': require('../structure/index.js'),
    'n-terminal': require('../terminal/index.js')
  }
}
