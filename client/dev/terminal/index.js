import './terminal.css';

module.exports = {
  props: {
    bus: null,
    events: null
  },
  data() {
    return {
        interactions: [
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          },
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          },
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          },
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          },
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          },
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          },
          {
            question: 'Something?',
            answer: 'yes',
            answered: false
          }
        ]
    }
  },
  methods: {
    answer(info) {
      info.answered = true;
      this.bus.pub(this.events.QUESTION_ANSWERED, info);
    },
    finish() {
      this.bus.pub(this.events.QUESTIONS_RESTARTED);
    },
    restart() {
      this.bus.pub(this.events.QUESTIONS_RESTARTED);
    }
  },
  template: require('./terminal.html')
}
