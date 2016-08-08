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

      <div v-for="cTest in tree.clientTest">
        {{cTest}}
      </div>

      <div v-for="sTest in tree.serverTest">
        {{sTest}}
      </div>

      <div v-for="cTask in tree.clientTask">
        {{cTask}}
      </div>

      <div v-for="sTask in tree.serverTask">
        {{sTask}}
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
        return {
          root: this.structure.root,
          client: this.structure.client,
          clientTest: this.structure.clientTest,
          clientTask: this.structure.clientTask,
          server: this.structure.server,
          serverTest: this.structure.serverTest,
          serverTask: this.structure.serverTask
        }
      }
  }
}
