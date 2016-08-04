import './structure.css';

module.exports = {
  props: {
    bus: null,
    events: null
  },
  data() {
    return {
      structure: new Map(),
      finished: false
    }
  },
  ready() {
    this.bus.sub(this.events.QUESTION_ANSWERED, (info) => {
      this.structure.set(info.key, info);
    });

    this.bus.sub(this.events.QUESTIONS_FINISHED, () => {
      this.finished = true;
    });

    this.bus.sub(this.events.QUESTIONS_RESTARTED, () => {
      this.finished = false;
      this.structure.clear();
    });
  },
  template: require('./structure.html')
}
