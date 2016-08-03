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
            question: 'What is the name of your app?',
            answer: '',
            answered: false
          },
          {
            question: 'What is your username?',
            answer: '',
            answered: false
          },
          {
            question: 'What is your email?',
            answer: '',
            answered: false
          },
          {
            question: 'What stack do you want?',
            answer: '',
            answered: false
          },
          {
            question: 'Which Git repository hosting service are you using?',
            answer: '',
            answered: false
          },
          {
            question: 'Do you want to keep test in a separated directory?',
            answer: '',
            answered: false
          },
          {
            question: 'What do you want in server side?',
            answer: '',
            answered: false
          },
          {
            question: 'What do you want in client side?',
            answer: '',
            answered: false
          },
          {
            question: 'What framework do you want to use in server side?',
            answer: '',
            answered: false
          },
          {
            question: 'What transpiler do you want to use in server side?',
            answer: '',
            answered: false
          },
          {
            question: 'Do you want a secure app (HTTP/2)?',
            answer: '',
            answered: false
          },
          {
            question: 'Do you want to use a different static server? Such as nginx, apache, IIS?',
            answer: '',
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
