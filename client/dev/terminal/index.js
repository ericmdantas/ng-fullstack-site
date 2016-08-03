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
            question: 'Which stack do you want?',
            answer: '',
            answered: false
          },
          {
            question: 'Which Git repository hosting service are you using?',
            answer: '',
            answered: false
          },
          {
            question: 'Do you want to keep tests in a different folder?',
            answer: '',
            answered: false
          },
          {
            question: 'What language do you want in the server side?',
            answer: '',
            answered: false
          },
          {
            question: 'Which framework do you want to use in the client side?',
            answer: '',
            answered: false
          },
          {
            question: 'Which framework do you want to use in server side?',
            answer: '',
            answered: false
          },
          {
            question: 'Which transpiler do you want to use in server side?',
            answer: '',
            answered: false
          },
          {
            question: 'Is it going to be a secure app (HTTPS || HTTP/2)?',
            answer: '',
            answered: false
          },
          {
            question: 'Do you want to use a different static server? Such as NGINX, Apache, IIS, etc?',
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
