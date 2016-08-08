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
  template: `
    <section class="tree-container">
      <div v-for="c in tree.client">
        <div v-for="cf in c" track-by="$index"
             :style="stylify(cf, $index)">
          {{cf}}
        </div>
      </div>

      <div v-for="s in tree.server">
        <div v-for="sf in s" track-by="$index"
             :style="stylify(sf, $index)">
          {{sf}}
        </div>
      </div>

      <div v-for="te in tree.test">
        <div v-for="tef in te" track-by="$index"
             :style="stylify(tef, $index)">
          {{tef}}
        </div>
      </div>

      <div v-for="ta in tree.task">
        <div v-for="taf in ta" track-by="$index"
             :style="stylify(taf, $index)">
          {{taf}}
        </div>
      </div>

      <div v-for="r in tree.root">
        {{r}}
      </div>
    </section>
  `,
  ready() {
    this.tree = this._organize();
  },
  methods: {
      stylify(info, index) {
        return {
          'padding-left': index * 20 + 'px'
        };
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
