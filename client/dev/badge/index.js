import './badge.css';

module.exports = {
  data() {
    return {
      badges: [
        {src: "https://travis-ci.org/ericmdantas/generator-ng-fullstack.svg?branch=master"},
        {src: "https://coveralls.io/repos/github/ericmdantas/generator-ng-fullstack/badge.svg?branch=master"}
      ]
    }
  },
  ready() {
    console.log('badge ready')
  },
  template: require('./badge.html')
}
