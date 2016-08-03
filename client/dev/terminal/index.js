import './terminal.css';

module.exports = {
  data() {
    return {
        interactions: [
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          },
          {
            question: 'Something?',
            answer: 'yes'
          }
        ]
    }
  },
  ready() {
    console.log('terminal ready')
  },
  template: require('./terminal.html')
}
