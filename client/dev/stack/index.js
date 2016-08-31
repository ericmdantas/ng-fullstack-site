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
              description: `Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.`,
              ready: true,
            },
            {
              name: 'Node',
              description: `Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.`,
              ready: true,
            },
          ]
        },
        {
          type: 'Node',
          items: [
            {
              name: 'Express',
              description: 'Fast, unopinionated, minimalist web framework for Node.js',
              ready: true,
            },
            {
              name: 'Koa 2',
              description: 'Next generation web framework for Node.js',
              ready: true,
            },
            {
              name: 'Mongoose',
              description: 'Elegant MongoDB object modeling for Node.js',
              ready: true,
            },
          ]
        },
        {
          type: 'Go',
          items: [
            {
              name: 'Echo',
              description: 'Fast and unfancy HTTP server framework for Go',
              ready: true,
            },
            {
              name: 'Gin',
              description: 'Gin is a web framework written in Go. It features a martini-like API with much better performance',
              ready: true,
            },
            {
              name: 'Mgo',
              description: 'mgo (pronounced as mango) is a MongoDB driver for the Go language that implements a rich and well tested selection of features under a very simple API following standard Go idioms',
              ready: true,
            },
          ]
        },
        {
          type: 'Transpilers',
          items: [
            {
              name: 'Babel',
              description: 'Use next generation JavaScript, today',
              ready: true,
            },
            {
              name: 'Typescript 2',
              description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output',
              ready: true,
            },
          ]
        },
        {
          type: 'Client',
          items: [
            {
              name: 'Angular 1',
              description: 'HTML enhanced for web apps',
              ready: true,
            },
            {
              name: 'Angular 2',
              description: 'One framework. Mobile and desktop',
              ready: true,
            },
            {
              name: 'Aurelia',
              description: 'Aurelia is a JavaScript client framework for mobile, desktop and web leveraging simple conventions and empowering creativity',
              ready: true,
            },
            {
              name: 'Vue',
              description: 'Reactive Components for Modern Web Interfaces',
              ready: true,
            },
          ]
        },
        {
          type: 'Protocols',
          items: [
            {
              name: 'HTTP',
              description: '',
              ready: true,
            },
            {
              name: 'HTTPS',
              description: '',
              ready: true,
            },
            {
              name: 'HTTP/2',
              description: '',
              ready: true
            }
          ]
        },
        {
          type: 'Databases',
          items: [
            {
              name: 'MongoDB',
              description: 'MongoDB Server is an open-source, document database designed for ease of development and scaling',
              ready: true
            },
            {
              name: 'PostgreSQL',
              description: 'PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness',
              ready: false,
              version: '1.11'
            },
            {
              name: 'RethinkDB',
              description: 'The open-source database for the realtime web',
              ready: false,
              version: '1.11',
            },
            {
              name: 'Firebase',
              description: 'Firebase is a mobile platform that helps you quickly develop high-quality apps, grow your user base, and earn more money',
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
              description: `Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches.`,
              ready: true,
            },
            {
              name: 'New Relic',
              description: 'Application performance monitoring for better business',
              ready: true,
            },
            {
              name: 'MongoHQ',
              description: 'Production Ready, Cloud Hosted',
              ready: true,
            },
            {
              name: 'MongoLAB',
              description: 'Database-as-a-Service for MongoDB. Proudly powering over 300,000 MongoDB deployments on AWS, Azure, and Google',
              ready: true,
            }
          ]
        },
        {
          type: 'Tools',
          items: [
            {
              name: 'Gulp',
              description: 'Automate and enhance your workflow',
              ready: true,
            },
            {
              name: 'Webpack',
              description: 'Module bundler',
              ready: false,
              version: '1.10'
            },
            {
              name: 'SystemJS',
              description: 'Universal dynamic module loader',
              ready: true
            },
            {
              name: 'Karma',
              description: 'Spectacular Test Runner for JavaScript',
              ready: true
            },
            {
              name: 'Jasmine',
              description: 'DOM-less simple JavaScript testing framework',
              ready: true
            },
            {
              name: 'Mocha',
              description: 'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun',
              ready: true
            }
          ]
        }
      ]
    }
  },
  template: require('./stack.html')
}
