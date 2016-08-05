import './stack.css';

module.exports = {
  data() {
    return {
      groups: [
        {
          type: 'Server',
          items: [
            {
              name: 'Golang',
              description: 'Something about Golang'
            },
            {
              name: 'Node',
              description: 'Something about Node'
            },
          ]
        },
        {
          type: 'Transpilers',
          items: [
            {
              name: 'Babel',
              description: 'Something about Babel'
            },
            {
              name: 'Typescript',
              description: 'Something about Babel'
            },
          ]
        },
        {
          type: 'Client',
          items: [
            {
              name: 'Angular 1',
              description: 'Something about Angular 1'
            },
            {
              name: 'Angular 2',
              description: 'Something about Angular 2'
            },
            {
              name: 'Aurelia',
              description: 'Something about Aurelia'
            },
            {
              name: 'Vue',
              description: 'Something about Vue'
            },
          ]
        },
        {
          type: 'Protocols',
          items: [
            {
              name: 'HTTP',
              description: 'Something about HTTP'
            },
            {
              name: 'HTTPS',
              description: 'Something about HTTPS'
            },
            {
              name: 'HTTP/2',
              description: 'Something about HTTP/2'
            }
          ]
        },
        {
          type: 'Platforms',
          items: [
            {
              name: 'Heroku',
              description: 'Something about Heroku'
            },
            {
              name: 'New Relic',
              description: 'Something about New Relic'
            },
            {
              name: 'MongoHQ',
              description: 'Something about MongoHQ'
            },
            {
              name: 'MongoLAB',
              description: 'Something about MongoLAB'
            }
          ]
        },
        {
          type: 'Tools',
          items: [
            {
              name: 'Gulp',
              description: 'Something about Gulp'
            },
            {
              name: 'Webpack',
              description: 'Something about Webpack'
            },
            {
              name: 'SystemJS',
              description: 'Something about SystemJS'
            },
            {
              name: 'Karma',
              description: 'Something about Karma'
            },
            {
              name: 'Mocha',
              description: 'Something about Mocha'
            }
          ]
        }
      ]
    }
  },
  template: require('./stack.html')
}
