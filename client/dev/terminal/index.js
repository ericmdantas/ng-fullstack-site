import './terminal.css';
import QuestionContainer from './question_container.js';

module.exports = {
  props: {
    bus: null,
    events: null
  },
  data() {
    return {
      question: new QuestionContainer()
    }
  },
  methods: {
    answer(info, answer) {
      info.answered = true;
      info.answer = answer;
      this.bus.pub(this.events.QUESTION_ANSWERED, info);
    },
    finish() {
      this.bus.pub(this.events.QUESTIONS_RESTARTED);
    },
    restart() {
      this.question = new QuestionContainer();
      this.bus.pub(this.events.QUESTIONS_RESTARTED);
    }
  },
  template: require('./terminal.html')
}
