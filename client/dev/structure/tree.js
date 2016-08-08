module.exports = {
  props: {
    root: null,
    client: null,
    clientTest: null,
    clientTask: null,
    server: null,
    serverTest: null,
    serverTask: null
  },
  template: `
    <div v-for="c in client">
      {{c}}
    </div>

    <div v-for="s in server">
      {{s}}
    </div>

    <div v-for="cTest in clientTest">
      {{cTest}}
    </div>

    <div v-for="sTest in serverTest">
      {{sTest}}
    </div>

    <div v-for="cTask in clientTask">
      {{cTask}}
    </div>

    <div v-for="sTask in serverTask">
      {{sTask}}
    </div>

    <div v-for="r in root">
      {{r}}
    </div>
  `
}
