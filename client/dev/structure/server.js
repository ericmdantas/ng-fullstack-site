module.exports = {
  props: {
    path: null
  },
  template: `
    <div v-for="p in path">
      {{p}}
    </div>
  `
}
