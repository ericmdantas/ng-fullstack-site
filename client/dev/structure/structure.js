import _ from 'lodash';

export default class Structure {
  constructor(answers) {
    this._answers = answers;
    this._structure = {};

    this._createDefaultFiles();

    if (this._get("serverLanguage").answer === "Node") {
      this._createNodeServer();
      this._createServerTasks();
      this._createNodeTest();
    }

    if (this._get("serverLanguage").answer === "Golang") {
      this._createGolangServer();
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

    if ((this._get("secure").answer === "Yes") && (this._get("stack").answer !== "Client")) {
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
    this._structure.server = {
      todoRoutes: 'server/api/todo/route/todo-route.js',
      todoModel: 'server/api/todo/model/todo-model.js',
      todoController: 'server/api/todo/controller/todo-controller.js',
      todoDAO: 'server/api/todo/dao/todo-dao.js',
      routes: 'server/routes/index.js',
      constants: 'server/constants/db.json',
      dbConfig: 'server/config/db.conf.js',
      routeConfig: 'server/config/routes.conf.js',
      commons: 'server/commons/static/index.js',
      main: 'server/server.js',
    }

    if (this._get("transpilerServer").answer === "Typescript") {
      for (let prop in this._structure.server) {
        this._structure.server[prop] = this._structure.server[prop].replace(/\.js$/, '.ts');
      }
    }
  }

  _createGolangServer() {
    this._structure.server = {
      todoController: 'server/api/todo/controller/todocontroller.go',
      todoControllerTest: 'server/api/todo/controller/todocontroller_test.go',
      todoModel: 'server/api/todo/model/todomodel.go',
      todoModelTest: 'server/api/todo/model/todomodel_test.go',
      todoDao: 'server/api/todo/dao/tododao.go',
      todoDaoTest: 'server/api/todo/dao/tododao_test.go',
      todoRoute: 'server/api/todo/route/todoroute.go',
      todoRouteTest: 'server/api/todo/route/todoroute_test.go',
      routes: 'server/routes/routes.go',
      routesTest: 'server/routes/routes_test.go',
      dbConfig: 'server/config/dbconfig.go',
      dbConfigTest: 'server/config/dbconfig_test.go',
      commonStatic: 'server/common/static/static.go',
      commonStaticTest: 'server/common/static/static_test.go',
      main: 'server/main.go',
    }
  }

  _createAngular1Client() {
    this._structure.client = {
      todoController: 'client/dev/todo/controllers/todo-controller.js',
      todoModel: 'client/dev/todo/model/todo-model.js',
      todoResource: 'client/dev/todo/resource/todo-resource.js',
      todoService: 'client/dev/todo/service/todo-dao.js',
      todoStyle: 'client/dev/todo/styles/todo.css',
      todoTemplates: 'client/dev/todo/templates/todo.html',
      indexHtml: 'client/dev/index.html',
      main: 'client/dev/app.js',
      config: 'client/dev/app.config.js',
      route: 'client/dev/app.route.js',
    }
  }

  _createAngular2Client() {
    this._structure.client = {
      todoComponent: 'client/dev/todo/components/todo-cmp.ts',
      todoRoute: 'client/dev/todo/components/todo-route.ts',
      todoService: 'client/dev/todo/services/todo-service.ts',
      todoStyle: 'client/dev/todo/styles/todo.css',
      todoTemplate: 'client/dev/todo/templates/todo.html',
      indexHtml: 'client/dev/index.html',
      main: 'client/dev/index.ts',
      systemConfig: 'client/dev/config.js',
      route: 'client/dev/app.ts',
    }
  }

  _createAureliaClient() {
    this._structure.client = {
      todoComponent: 'client/dev/todo/components/todo.js',
      todoTemplate: 'client/dev/todo/components/todo.html',
      todoModel: 'client/dev/todo/models/todo.js',
      todoService: 'client/dev/todo/services/todo-service.js',
      todoStyle: 'client/dev/todo/styles/todo.css',
      indexHtml: 'client/dev/index.html',
      main: 'client/dev/app.js',
      mainTemplate: 'client/dev/app.html',
    }
  }

  _createVueClient() {
    this._structure.client = {
      todoComponent: 'client/dev/todo/components/todo-cmp.js',
      todoService: 'client/dev/todo/services/todo-service.js',
      todoStyle: 'client/dev/todo/styles/todo.css',
      indexHtml: 'client/dev/index.html',
      main: 'client/dev/index.js',
    }
  }

  _createClientTasks() {
    this._structure.clientTask = {
      build: 'tasks/client/build.js',
      buildCss: 'tasks/client/build_css.js',
      buildHtml: 'tasks/client/build_html.js',
      buildImage: 'tasks/client/build_image.js',
      buildJs: 'tasks/client/build_js.js',
      const: 'tasks/client/const.js',
      copy: 'tasks/client/copy.js',
      del: 'tasks/client/del.js',
      test: 'tasks/client/test.js',
      watch: 'tasks/client/watch.js'
    }
  }

  _createServerTasks() {
    this._structure.serverTask = {
      build: 'tasks/server/build.js',
      test: 'tasks/server/test.js'
    }
  }

  _createCerts() {
    let _certs = {
      caCrt: 'server/cert/ca.crt',
      caCsr: 'server/cert/ca.csr',
      caKey: 'server/cert/ca.key',
      serverCrt: 'server/cert/server.crt',
      serverCsr: 'server/cert/server.csr',
      serverKey: 'server/cert/server.key'
    }

    _.assign(this._structure.server, _certs);
  }

  _createDefaultFiles() {
    this._structure.default = {
      readme: 'README.md',
      protractorConf: 'protractor.conf.js',
      procfile: 'procfile.txt',
      packageJson: 'package.json',
      karmaConf: 'karma.conf.js',
      newRelic: 'newrelic.js',
      gulp: 'gulpfile.babel.js',
      yoRc: '.yo-rc.json',
      travis: '.travis.yml',
      gitignore: '.gitignore',
      babelrc: '.babelrc'
    }

    if (this._get("transpilerServer").answer === "Typescript") {
      this._structure.default.tsConfigJson = "tsconfig.json";
      this._structure.default.typingsJson = "typings.json";
    }
  }

  _createAngular1Test() {
    this._structure.clientTest = {
      controllerTest: 'tests/client/todo/controller/todo-controller_test.js',
      modelTest: 'tests/client/todo/model/todo-model_test.js',
      serviceTest: 'tests/client/todo/service/todo-controller_test.js',
      e2e: 'tests/e2e/todo.e2e_test.js',
    }
  }

  _createAngular2Test() {
    this._structure.clientTest = {
      componentTest: 'tests/client/todo/components/todo-cmp_test.ts',
      serviceTest: 'tests/client/todo/services/todo-service_test.ts',
      e2e: 'tests/e2e/todo.e2e_test.js',
    }
  }

  _createAureliaTest() {
    this._structure.clientTest = {
      componentTest: 'tests/client/todo/components/todo-cmp_test.js',
      modelTest: 'tests/client/todo/services/todo-model_test.js',
      serviceTest: 'tests/client/todo/services/todo-service_test.js',
      e2e: 'tests/e2e/todo.e2e_test.js',
    }
  }

  _createVueTest() {
    this._structure.clientTest = {
      componentTest: 'tests/client/todo/components/todo-cmp_test.js',
      modelTest: 'tests/client/todo/services/todo-model_test.js',
      serviceTest: 'tests/client/todo/services/todo-service_test.js',
      e2e: 'tests/e2e/todo.e2e_test.js',
    }
  }

  _createNodeTest() {
    this._structure.serverTest = {
      helperDbJson: 'tests/server/_helpers/db.json',
      helperDbDao: 'tests/server/_helpers/db.js',
      controllerTest: 'tests/server/todo /controller/todo-controller_test.js',
      daoTest: 'tests/server/todo/dao/todo-dao_test.js',
      modelTest: 'tests/server/todo/model/todo-model_test.js',
      routeTest: 'tests/server/todo/controller/todo-route_test.js',
      e2e: 'tests/e2e/todo.e2e_test.js',
    }
  }

  _splitPath(obj) {
    let _spl = [];

    for (let prop in obj) {
      _spl.push(obj[prop].split('/'));
    }

    return _spl;
  }

  get root() {
    return this._splitPath(this._structure.default);
  }

  get client() {
    let _client = this._structure.client;    

    if (this._get("stylePreprocessor").answer === "Less") {
      _client.todoStyle = _client.todoStyle.replace('.css', '.less');
    }

    if (this._get("stylePreprocessor").answer === "Sass") {
      _client.todoStyle = _client.todoStyle.replace('.css', '.sass');      
    } 

    return this._splitPath(_client);
  }

  get server() {
    return this._splitPath(this._structure.server);
  }

  get clientTest() {
    return this._splitPath(this._structure.clientTest);
  }

  get clientTask() {
    return this._splitPath(this._structure.clientTask);
  }

  get serverTest() {
    return this._splitPath(this._structure.serverTest);
  }

  get serverTask() {
    return this._splitPath(this._structure.serverTask);
  }
}
