import './logo.css';

module.exports = {
  data() {
    return {

    }
  },
  template: `
    <div class="logo-container">
      <img src="./common/logo.png" class="logo"/>
    </div>
  `,
  ready() {
    console.log('logo ready')
  }
}
