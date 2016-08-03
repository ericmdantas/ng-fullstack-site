import './header.css';

module.exports = {
  data() {
    return {

    }
  },
  template: require('./header.html'),
  components: {
    'n-menu': require('../menu/index.js')
  },
  methods: {
    goUp() {
      window.history.replaceState({}, document.title, ".");
      window.scrollTo(0, 0);
    }
  }
};
