module.exports = class QuestionContainer {
  constructor() {
    this.interactions = [
      {
        question: 'What is the name of your app?',
        answer: 'my-app',
        answered: false,
        key: 'appName',
        multiple: false,
        visible: true,
        marked: true
      },
      {
        question: 'Which stack do you want?',
        answer: '',
        answers: ['Client', 'Server', 'Fullstack'],
        answered: false,
        key: 'stack',
        multiple: true,
        visible: false
      },
      {
        question: 'Which Git repository hosting service are you using?',
        answer: '',
        answers: ['Github', 'Bitbucket', 'Gitlab'],
        answered: false,
        key: 'repo',
        multiple: true
      },
      {
        question: 'Do you want to keep tests in a different folder?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        key: 'testsSeparated',
        multiple: true,
        visible: false
      },
      {
        question: 'What language do you want in the server side?',
        answer: '',
        answers: ['Golang', 'Node'],
        answered: false,
        key: 'serverLanguage',
        multiple: true,
        visible: false
      },
      {
        question: 'Which framework do you want to use in the client side?',
        answer: '',
        answers: ['Angular 1', 'Angular 2', 'Aurelia', 'Vue'],
        answered: false,
        key: 'clientFramework',
        multiple: true,
        visible: false
      },
      {
        question: 'Which framework do you want to use in server side?',
        answer: '',
        answers: ['Express', 'Koa'],
        answered: false,
        key: 'nodeFramework',
        multiple: true,
        visible: false
      },
      {
        question: 'Which framework do you want to use in server side?',
        answer: '',
        answers: ['Gin', 'Echo'],
        answered: false,
        key: 'goFramework',
        multiple: true,
        visible: false
      },
      {
        question: 'Which transpiler do you want to use in server side?',
        answer: '',
        answers: ['Babel', 'Typescript'],
        answered: false,
        key: 'transpilerServer',
        multiple: true,
        visible: false
      },
      {
        question: 'Is it going to be a secure app (HTTPS || HTTP/2)?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        key: 'secure',
        multiple: true,
        visible: false
      },
      {
        question: 'Do you want to use a different static server? Such as NGINX, Apache, IIS, etc?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        key: 'separatedStatic',
        multiple: true,
        visible: false
      }
    ]
  }

  showNext() {
    for (let i = 0; i < this.interactions.length; i++) {
      switch(this.interactions[i].key) {
        case "appName":
          this.interactions[1].visible = true;

          return;

        case "stack":
          this.interactions[2].visible = true;

          return;

        case "repo":
          this.interactions[3].visible = true;

          return;

        case "testsSeparated":
          this.interactions[4].visible = true;

          return;

        case "serverLanguage":
          if (this.interactions[1].answer != "Client") {
            this.interactions[5].visible = true;
          }

          return;

        case "clientFramework":
          if (this.interactions[1].answer != "Server") {
            this.interactions[6].visible = true;
          }

          return;

        case "nodeFramework":
          if (this.interactions[4].answer === "Node") {
            this.interactions[8].visible = true;
          }

          return;

        case "goFramework":
          if (this.interactions[4].answer === "Golang") {
            this.interactions[7].visible = true;
          }

          return;

        case "transpilerServer":
          if (this.interactions[4].answer === "Node") {
            this.interactions[9].visible = true;
          }

          return;

        case "secure":
          this.interactions[10].visible = true;

          return;

        case "separatedStatic":
          this.interactions[11].visible = true;

          return;
      }
    }
  }
}
