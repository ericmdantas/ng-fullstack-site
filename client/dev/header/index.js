import './header.css';

module.exports = {
  data() {
    return {

    }
  },
  ready() {
    console.log('header ready')
  },
  template: require('./header.html'),
  components: {
    'n-menu': require('../menu/index.js')
  }
};
