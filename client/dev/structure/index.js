import './structure.css';
import Structure from './structure.js';

module.exports = {
  props: {
    bus: null,
    events: null
  },
  data() {
    return {
      answers: new Map(),
      structure: {},
      finished: false
    }
  },
  ready() {
    this.bus.sub(this.events.QUESTION_ANSWERED, (info) => {
      this.answers.set(info.key, info);
    });

    this.bus.sub(this.events.QUESTIONS_FINISHED, () => {
      this.finished = true;
      this.create();
    });

    this.bus.sub(this.events.QUESTIONS_RESTARTED, () => {
      this.finished = false;
      this.answers.clear();
    });
  },
  methods: {
    create() {
      this.structure = new Structure(this.answers);
    }
  },
  template: require('./structure.html')
}
