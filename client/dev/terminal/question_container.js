module.exports = class QuestionContainer {
  constructor() {
    this.interactions = [
      {
        question: 'What is the name of your app?',
        answer: 'my-app',
        answered: false,
        multiple: false
      },
      {
        question: 'Which stack do you want?',
        answer: '',
        answers: ['Client', 'Server', 'Fullstack'],
        answered: false,
        multiple: true
      },
      {
        question: 'Which Git repository hosting service are you using?',
        answer: '',
        answers: ['Github', 'Bitbucket', 'Gitlab'],
        answered: false,
        multiple: true
      },
      {
        question: 'Do you want to keep tests in a different folder?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        multiple: true
      },
      {
        question: 'What language do you want in the server side?',
        answer: '',
        answers: ['Golang', 'Node'],
        answered: false,
        multiple: true
      },
      {
        question: 'Which framework do you want to use in the client side?',
        answer: '',
        answers: ['Angular 1', 'Aurelia 2', 'Aurelia', 'Vue'],
        answered: false,
        multiple: true
      },
      {
        question: 'Which framework do you want to use in server side?',
        answer: '',
        answers: ['Express', 'Koa'],
        answered: false,
        multiple: true
      },
      {
        question: 'Which framework do you want to use in server side?',
        answer: '',
        answers: ['Gin', 'Echo'],
        answered: false,
        multiple: true
      },
      {
        question: 'Which transpiler do you want to use in server side?',
        answer: '',
        answers: ['Babel', 'Typescript'],
        answered: false,
        multiple: true
      },
      {
        question: 'Is it going to be a secure app (HTTPS || HTTP/2)?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        multiple: true
      },
      {
        question: 'Do you want to use a different static server? Such as NGINX, Apache, IIS, etc?',
        answer: '',
        answers: ['Yes', 'No'],
        answered: false,
        multiple: true
      }
    ]
  }
}
