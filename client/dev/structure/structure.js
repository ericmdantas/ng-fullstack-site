import File from './file.js';
import Folder from './folder.js';

export default class Structure {
  constructor(answers) {
    this._answers = answers;
    this._structure = {};

    this._createDefaultFiles();

    if (this._get("serverLanguage").answer === "Node") {
      this._createNodeServer(structure.get("transpilerServer").answer);
      this._createServerTasks();
      this._createNodeTest();
    }

    if (this._get("serverLanguage").answer === "Golang") {
      this._createGolangServer();
      this._createGolangTest();
    }

    if (this._get("clientFramework").answer === "Angular 1") {
      this._createAngular1Client();
      this._createAngular1Test();
      this._createClientTasks();
    }

    if (this._get("clientFramework").answer === "Angular 2") {
      this._createAngular2Client();
      this._createAngular2Test();
      this._createClientTasks();
    }

    if (this._get("clientFramework").answer === "Aurelia") {
      this._createAureliaClient();
      this._createAureliaTest();
      this._createClientTasks();
    }

    if (this._get("clientFramework").answer === "Vue") {
      this._createVueClient();
      this._createVueTest();
      this._createClientTasks();
    }

    if (this._get("secure").answer === "Yes") {
      this._createCerts();
    }
  }

  _get(token) {
    if (!this._answers.has(token)) {
      return {};
    }

    return this._answers.get(token);
  }

  _createNodeServer() {
    console.log('node server')
  }

  _createGolangServer() {
    console.log('go server')
  }

  _createAngular1Client() {
    console.log('ng1 client')
  }

  _createAngular2Client() {
    console.log('ng2 client')
  }

  _createAureliaClient() {
    console.log('aurelia client')
  }

  _createVueClient() {
    console.log('vue client')
  }

  _createClientTasks() {
    console.log('client tasks')
  }

  _createServerTasks() {
    console.log('server tasks')
  }

  _createCerts() {
    console.log('secure')
  }

  _createDefaultFiles() {
    console.log('default files')
  }

  _createAngular1Test() {
    console.log('angular1 test')
  }

  _createAngular2Test() {
    console.log('angular2 test')
  }

  _createAureliaTest() {
    console.log('aurelia test')
  }

  _createVueTest() {
    console.log('aurelia test')
  }

  _createGolangServer() {
    console.log('golang test')
  }

  _createNodeServer() {
    console.log('node test')
  }
}
