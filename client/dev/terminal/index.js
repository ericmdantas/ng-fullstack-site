import './terminal.css';
import InteractionContainer from './interaction_container.js';

module.exports = {
  props: {
    bus: null,
    events: null,
  },
  data() {
    return {
      terminal: new InteractionContainer(),
      creatingStructure: false,
      structureCreated: false,
      installingDeps: false,
      depsInstalled: false,
      feedbackFinished: false,
      finished: false,
    }
  },
  methods: {
    answer(info, answer) {
      info.answered = true;
      info.answer = answer;
      this.terminal.showNext();

      this.bus.emit(this.events.QUESTION_ANSWERED, info);

      if (info.lastOne) {
        this.finish()
      }
    },
    restart() {
      this.finished = false;
      this.creatingStructure = false;
      this.structureCreated = false;
      this.installingDeps = false;
      this.depsInstalled = false;
      this.feedbackFinished = false;

      this.terminal = new InteractionContainer();
      this.bus.emit(this.events.QUESTIONS_RESTARTED);
    },
    finish() {
      this.finished = true;

      this._creatingStructure()
        .then(() => {
          return this._structureCreated();
        })
        .then(() => {
          return this._installingDeps();
        })
        .then(() => {
          return this._depsInstalled();
        })
        .then(() => {
          return this._feedbackFinished();
        })
        .then(() => {
          this.bus.emit(this.events.QUESTIONS_FINISHED);
        });
    },
    _creatingStructure() {
      return new Promise((res) => {
        setTimeout(() => {
          this.creatingStructure = true;
          return res(null);
        }, 1000);
      });
    },
    _structureCreated() {
      return new Promise((res) => {
        setTimeout(() => {
          this.structureCreated = true;
          return res(null);
        }, 1000);
      });
    },
    _installingDeps() {
      return new Promise((res) => {
        setTimeout(() => {
          this.installingDeps = true;
          return res(null);
        }, 500);
      });
    },
    _depsInstalled() {
      return new Promise((res) => {
        setTimeout(() => {
          this.depsInstalled = true;
          return res(null);
        }, 2000);
      });
    },
    _feedbackFinished() {
      return new Promise((res) => {
        setTimeout(() => {
          this.feedbackFinished = true;
          return res(null);
        }, 500);
      });
    }
  },
  template: require('./terminal.html')
}
