import './tree.css';
import _ from 'lodash';

module.exports = {
  props: {
    structure: null
  },
  data() {
    return {
      tree: {}
    };
  },
  template: require('./tree.html'),
  ready() {
    this.tree = this._parse();
  },
  methods: {
      stylify(info, index) {
        return {
          'padding-left': index * 20 + 'px'
        };
      },
      _parse() {
        let _treeOrganized = this._organize();

        return _treeOrganized;
      },
      _organize() {
        return {
          root: this._organizeRoot(),
          client: this._organizeClient(),
          server: this._organizeServer(),
          test: this._organizeTest(),
          task: this._organizeTask(),
        }
      },
      _organizeRoot() {
        return this.structure.root;
      },
      _organizeClient() {
        return this.structure.client;
      },
      _organizeServer() {
        return this.structure.server;
      },
      _organizeTest() {
        let _test = [];

        for (let i = 0; i < this.structure.clientTest.length; i++) {
          _test.push(this.structure.clientTest[i]);
        }

        for (let i = 0; i < this.structure.serverTest.length; i++) {
          _test.push(this.structure.serverTest[i]);
        }

        return _test;
      },
      _organizeTask() {
        let _task = [];

        for (let i = 0; i < this.structure.clientTask.length; i++) {
          _task.push(this.structure.clientTask[i]);
        }

        for (let i = 0; i < this.structure.serverTask.length; i++) {
          _task.push(this.structure.serverTask[i]);
        }

        return _task;
      }
  }
}
