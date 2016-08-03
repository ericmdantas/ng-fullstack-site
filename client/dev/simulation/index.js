import './simulation.css';
import {bus} from '../utils/index.js';

module.exports = {
  data() {
    return {
      bus: bus,
      events: {
        QUESTION_ANSWERED: 'terminal.question_answered',
        QUESTIONS_FINISHED: 'terminal.questions_finished',
        QUESTIONS_RESTARTED: 'terminal.questions_restarted'
      }
    }
  },
  template: require('./simulation.html'),
  components: {
    'n-terminal': require('../terminal/index.js'),
    'n-structure': require('../structure/index.js')
  }
}
