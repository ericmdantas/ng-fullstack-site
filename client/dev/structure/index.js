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
  components: {
      'n-root': require('./root.js'),
      'n-client': require('./client.js'),
      'n-client-test': require('./client_test.js'),
      'n-client-task': require('./client_task.js'),
      'n-server': require('./server.js'),
      'n-server-test': require('./server_test.js'),
      'n-server-task': require('./server_task.js')
  },
  template: require('./structure.html')
}
