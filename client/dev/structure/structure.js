import File from './file.js';
import Folder from './folder.js';

export default class Structure {
  constructor(structure) {
    this._structure = {};

    this._createDefaultFiles();

    if (structure.get("serverLanguage").answer === "Node") {
      this._createNodeServer(structure.get("transpilerServer").answer);
    }

    if (structure.get("serverLanguage").answer === "Golang") {
      this._createGolangServer();
    }

    if (structure.get("clientFramework").answer === "Angular 1") {
      this._createAngular1Client();
    }

    if (structure.get("clientFramework").answer === "Angular 2") {
      this._createAngular2Client();
    }

    if (structure.get("clientFramework").answer === "Aurelia") {
      this._createAureliaClient();
    }

    if (structure.get("clientFramework").answer === "Vue") {
      this._createVueClient();
    }

    if (structure.get("secure").answer === "Yes") {
      this._createCerts();
    }
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
}
