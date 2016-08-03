import './structure.css';

module.exports = {
  props: {
    bus: null,
    events: null
  },
  data() {
    return {
      visible: false
    }
  },
  ready() {
    this.bus.sub(this.events.QUESTION_ANSWERED, (info) => {
      console.log(info);
    });

    this.bus.sub(this.events.QUESTIONS_FINISHED, () => {

    });

    this.bus.sub(this.events.QUESTIONS_RESTARTED, () => {
      this.visible = true;
    });
  },
  template: require('./structure.html')
}
