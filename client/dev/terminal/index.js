import './terminal.css';
import InteractionContainer from './interaction_container.js';

module.exports = {
  props: {
    bus: null,
    events: null
  },
  data() {
    return {
      terminal: new InteractionContainer()
    }
  },
  methods: {
    answer(info, answer) {
      info.answered = true;
      info.answer = answer;
      this.terminal.showNext();

      this.bus.pub(this.events.QUESTION_ANSWERED, info);

      if (info.lastOne) {
        this.bus.pub(this.events.QUESTIONS_FINISHED);
      }
    },
    restart() {
      this.terminal = new InteractionContainer();
      this.bus.pub(this.events.QUESTIONS_RESTARTED);
    }
  },
  template: require('./terminal.html')
}
