import File from './file.js';
import Folder from './folder.js';

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
