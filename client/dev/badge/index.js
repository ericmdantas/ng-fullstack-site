import './badge.css';

module.exports = {
  data() {
    return {
      badges: [
        {
          src: "https://badge.fury.io/js/generator-ng-fullstack.svg",
          url: "https://github.com/ericmdantas/generator-ng-fullstack/"
        },
        {
          src: "https://travis-ci.org/ericmdantas/generator-ng-fullstack.svg?branch=master",
          url: "https://travis-ci.org/ericmdantas/generator-ng-fullstack"
        },
        {
          src: "https://coveralls.io/repos/github/ericmdantas/generator-ng-fullstack/badge.svg?branch=master",
          url: "https://coveralls.io/github/ericmdantas/generator-ng-fullstack?branch=master"
        }
      ]
    }
  },
  template: require('./badge.html')
}
