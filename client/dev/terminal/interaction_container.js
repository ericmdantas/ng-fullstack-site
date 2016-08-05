module.exports = class InteractionContainer {
  constructor() {
    this.interactions = {
      'appName': {
        question: 'What is the name of your app?',
        answer: 'my-app',
        answered: false,
        key: 'appName',
        multiple: false,
        visible: true
      },
      'stack': {
        question: 'Which stack do you want?',
        answer: '',
        answers: ['Client', 'Server', 'Fullstack'],
        answered: false,
        key: 'stack',
        multiple: true,
        visible: false
      },
      'repo': {
        question: 'Which Git repository hosting service are you using?',
        answer: '',
        answers: ['Github', 'Bitbucket', 'Gitlab'],
        answered: false,
        key: 'repo',
        multiple: true,
        visible: false
      },
      'testsSeparated': {
        question: 'Do you want to keep tests in a different folder?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        key: 'testsSeparated',
        multiple: true,
        visible: false
      },
      'serverLanguage': {
        question: 'What language do you want in the server side?',
        answer: '',
        answers: ['Golang', 'Node'],
        answered: false,
        key: 'serverLanguage',
        multiple: true,
        visible: false
      },
      'clientFramework': {
        question: 'Which framework do you want to use in the client side?',
        answer: '',
        answers: ['Angular 1', 'Angular 2', 'Aurelia', 'Vue'],
        answered: false,
        key: 'clientFramework',
        multiple: true,
        visible: false
      },
      'nodeFramework': {
        question: 'Which framework do you want to use in server side?',
        answer: '',
        answers: ['Express', 'Koa'],
        answered: false,
        key: 'nodeFramework',
        multiple: true,
        visible: false
      },
      'goFramework': {
        question: 'Which framework do you want to use in server side?',
        answer: '',
        answers: ['Gin', 'Echo'],
        answered: false,
        key: 'goFramework',
        multiple: true,
        visible: false
      },
      'transpilerServer': {
        question: 'Which transpiler do you want to use in server side?',
        answer: '',
        answers: ['Babel', 'Typescript'],
        answered: false,
        key: 'transpilerServer',
        multiple: true,
        visible: false
      },
      'secure': {
        question: 'Is it going to be a secure app (HTTPS || HTTP/2)?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        key: 'secure',
        multiple: true,
        visible: false
      },
      'separatedStatic': {
        question: 'Do you want to use a different static server? Such as NGINX, Apache, IIS, etc?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        key: 'separatedStatic',
        multiple: true,
        visible: false,
        lastOne: true
      }
    }
  }

  showNext() {
    Object.keys(this.interactions).forEach((k) => {
      let _currentInt = this.interactions[k];

      switch(k) {
        case "appName":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;
            this.interactions["stack"].visible = true;
          }

          break;

        case "stack":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;
            this.interactions["repo"].visible = true;
          }

          break;

        case "repo":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;
            this.interactions["testsSeparated"].visible = true;
          }

          break;

        case "testsSeparated":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;

            if (this.interactions["stack"].answer !== "Client") {
              this.interactions["serverLanguage"].visible = true;
            } else {
              this.interactions["clientFramework"].visible = true;
            }
          }

          break;

        case "serverLanguage":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;

            if (this.interactions["stack"].answer !== "Server") {
              this.interactions["clientFramework"].visible = true;
            } else {
              if (_currentInt.answer === "Node") {
                this.interactions["nodeFramework"].visible = true;
              } else {
                this.interactions["goFramework"].visible = true;
              }
            }
          }

          break;

        case "clientFramework":
          if ((_currentInt.answered && !_currentInt.alreadyAnswered) && (this.interactions["stack"].answer !== "Server")) {
            _currentInt.alreadyAnswered = true;

            if (this.interactions["serverLanguage"].answer === "Node") {
                this.interactions["nodeFramework"].visible = true;
            } else {
              if (this.interactions["serverLanguage"].answer === "Golang") {
                this.interactions["goFramework"].visible = true;
              } else {
                this.interactions["secure"].visible = true;
              }
            }
          }

          break;

        case "nodeFramework":
          if (_currentInt.answered && !_currentInt.alreadyAnswered && this.interactions["stack"] !== "Client") {
            _currentInt.alreadyAnswered = true;

            this.interactions["transpilerServer"].visible = true;
          }

          break;

        case "goFramework":
          if (_currentInt.answered && !_currentInt.alreadyAnswered && this.interactions["stack"] !== "Client") {
            _currentInt.alreadyAnswered = true;

            this.interactions["secure"].visible = true;
          }

          break;

        case "transpilerServer":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;

            this.interactions["secure"].visible = true;
          }

          break;

        case "secure":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;

            this.interactions["separatedStatic"].visible = true;
          }

          break;

        case "separatedStatic":
          if (_currentInt.answered && !_currentInt.alreadyAnswered) {
            _currentInt.alreadyAnswered = true;
          }

          break;
      }
    });
  }
}
