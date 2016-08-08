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
        let _tree = this._prepare();
        let _treeNormalized = this._normalize(_tree);
        let _treeMarked = this._mark(_treeNormalized);

        return _treeMarked;
      },
      _prepare() {
        return {
          root: this._prepareRoot(),
          client: this._prepareClient(),
          server: this._prepareServer(),
          test: this._prepareTest(),
          task: this._prepareTask(),
        }
      },
      _normalize(tree) {
        let _tmpTree = _.clone(tree);

        for (let prop in _tmpTree) {
          _.forEach(_tmpTree[prop], (paths, indexTreeProp) => {
            _.forEach(paths, (path, indexItem) => {
              _tmpTree[prop][indexTreeProp][indexItem] = {
                value: path,                
                marked: false,
                visible: true,
                isFile: /\.+/.test(path)
              }
            })
          })
        }

        return _tmpTree;
      },
      _mark(tree) {
        let _tmpTree = _.clone(tree);
        let _marks = new Set();

        for (let prop in _tmpTree) {
          _.forEach(_tmpTree[prop], (paths, indexTreeProp) => {
            _.forEach(paths, (path, indexItem) => {
              if (!path.isFile && _marks.has(path.fullPath)) {
                path.marked = true;
                path.visible = false;
              } else {
                _marks.add(path.fullPath);
              }
            })
          })
        }

        return _tmpTree;
      },
      _prepareRoot() {
        return this.structure.root;
      },
      _prepareClient() {
        return this.structure.client;
      },
      _prepareServer() {
        return this.structure.server;
      },
      _prepareTest() {
        let _test = [];

        for (let i = 0; i < this.structure.clientTest.length; i++) {
          _test.push(this.structure.clientTest[i]);
        }

        for (let i = 0; i < this.structure.serverTest.length; i++) {
          _test.push(this.structure.serverTest[i]);
        }

        return _test;
      },
      _prepareTask() {
        let _task = [];

        for (let i = 0; i < this.structure.clientTask.length; i++) {
          _task.push(this.structure.clientTask[i]);
        }

        for (let i = 0; i < this.structure.serverTask.length; i++) {
          _task.push(this.structure.serverTask[i]);
        }

        return _task;
      }
  },
  template: require('./tree.html'),
}
