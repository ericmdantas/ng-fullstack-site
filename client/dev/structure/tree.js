module.exports = {
  props: {
    structure: null
  },
  data() {
    return {
      tree: {}
    }
  },
  template: `
    <div class="tree-container">
      <div v-for="c in tree.client">
        {{c}}
      </div>

      <div v-for="s in tree.server">
        {{s}}
      </div>

      <div v-for="ta in tree.task">
        {{ta}}
      </div>

      <div v-for="te in tree.test">
        {{te}}
      </div>

      <div v-for="r in tree.root">
        {{r}}
      </div>
    </div>
  `,
  ready() {
    this.tree = this._organize()
  },
  methods: {
      _organize() {
        let _root = [];
        let _client = [];
        let _server = [];
        let _test = [];
        let _task = [];

        for (let i = 0; i < this.structure.clientTest.length; i++) {
          _test.push(this.structure.clientTest[i])
        }

        for (let i = 0; i < this.structure.serverTest.length; i++) {
          _test.push(this.structure.serverTest[i])
        }

        for (let i = 0; i < this.structure.clientTask.length; i++) {
          _test.push(this.structure.clientTask[i])
        }

        for (let i = 0; i < this.structure.serverTask.length; i++) {
          _test.push(this.structure.serverTask[i])
        }

        _root = this.structure.root;
        _client = this.structure.client;
        _server = this.structure.server;

        return {
          root: _root,
          client: _client,
          server: _server,
          test: _test,
          task: _task
        }
      }
  }
}
