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
              description: 'Something about Babel',
              ready: true,
            },
          ]
        },
        {
          type: 'Client',
          items: [
            {
              name: 'Angular 1',
              description: 'Something about Angular 1',
              ready: true,
            },
            {
              name: 'Angular 2',
              description: 'Something about Angular 2',
              ready: true,
            },
            {
              name: 'Aurelia',
              description: 'Something about Aurelia',
              ready: true,
            },
            {
              name: 'Vue',
              description: 'Something about Vue',
              ready: true,
            },
          ]
        },
        {
          type: 'Protocols',
          items: [
            {
              name: 'HTTP',
              description: 'Something about HTTP',
              ready: true,
            },
            {
              name: 'HTTPS',
              description: 'Something about HTTPS',
              ready: true,
            },
            {
              name: 'HTTP/2',
              description: 'Something about HTTP/2',
              ready: true
            }
          ]
        },
        {
          type: 'DBs',
          items: [
            {
              name: 'MongoDB',
              description: 'Something about MongoDB',
              ready: true
            },
            {
              name: 'PostgreSQL',
              description: 'Something about PostgreSQL',
              ready: false,
              version: '1.11'
            },
            {
              name: 'RethinkDB',
              description: 'Something about RethinkDB',
              ready: false,
              version: '1.11',
            },
            {
              name: 'Firebase',
              description: 'Something about Firebase',
              ready: false,
              version: '1.11'
            }
          ]
        },
        {
          type: 'Platforms',
          items: [
            {
              name: 'Heroku',
              description: 'Something about Heroku',
              ready: true,
            },
            {
              name: 'New Relic',
              description: 'Something about New Relic',
              ready: true,
            },
            {
              name: 'MongoHQ',
              description: 'Something about MongoHQ',
              ready: true,
            },
            {
              name: 'MongoLAB',
              description: 'Something about MongoLAB',
              ready: true,
            }
          ]
        },
        {
          type: 'Tools',
          items: [
            {
              name: 'Gulp',
              description: 'Something about Gulp',
              ready: true,
            },
            {
              name: 'Webpack',
              description: 'Something about Webpack',
              ready: false,
              version: '1.10'
            },
            {
              name: 'SystemJS',
              description: 'Something about SystemJS',
              ready: true
            },
            {
              name: 'Karma',
              description: 'Something about Karma',
              ready: true
            },
            {
              name: 'Mocha',
              description: 'Something about Mocha',
              ready: true
            }
          ]
        }
      ]
    }
  },
  template: require('./stack.html')
}
