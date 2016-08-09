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
                prop: prop,
                value: path,
                visible: true,
                nodeIndex: indexItem,
                isFile: /\.+/.test(path)
              }
            })
          })
        }

        return _tmpTree;
      },
      _mark(tree) {
        let _tmpTree = _.clone(tree);
        let _marks = new Map();

        for (let prop in _tmpTree) {
          _.forEach(_tmpTree[prop], (paths, indexTreeProp) => {
            _.forEach(paths, (path, indexItem) => {
              let _val = _marks.get(path.value);
              let _isFile = path.isFile;
              let _alreadyMarked = _marks.has(path.value);
              let _propAlreadyUsed = _alreadyMarked && (_val.prop === path.prop);
              let _sameNodeLevel = _alreadyMarked && (_val.nodeIndex === path.nodeIndex);

              if (!_isFile && _alreadyMarked && _propAlreadyUsed && _sameNodeLevel) {
                path.visible = false;
              } else {
                _marks.set(path.value, path);
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

        let _e2e = 0;

        for (let i = 0; i < _test.length; i++) {
          for (let j = 0; j < _test[i].length; j++) {
            if (/\.e2e_test/.test(_test[i][j])) {
              _e2e += 1;

              if (_e2e > 1) {
                _test[i].splice(j, 1)
                i--;
              }
            }
          }
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
