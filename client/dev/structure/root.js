module.exports = {
  props: {
    path: null
  },
  ready() {
    console.log(this.path)
  },
  template: `
    <div v-for="p in path">
      {{p}}
    </div>
  `
}
