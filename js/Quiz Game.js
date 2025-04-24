const questions = [
  {
    category: 'Год создания',
    question: 'В каком году создан JS?',
    choices: ['8 июля 1996', '1 марта 1995', '25 апреля 2000'],
    answer: '8 июля 1996',
  },
  {
    category: 'HTML',
    question: 'как расшифровывается html?',
    choices: [
      'HyperToy Mother Landing',
      'HyperText Markup Language',
      'HyperX Money Language',
    ],
    answer: 'HyperToy Mother Landing',
  },
  {
    category: 'css',
    question: 'как расшифровывается css?',
    choices: ['Carded Staff Sheets', 'Can Sims Soon', 'Cascading Style Sheets'],
    answer: 'Cascading Style Sheets',
  },
  {
    category: 'ООП',
    question: 'Сколько принципов в ООП?',
    choices: ['5', '3', '4'],
    answer: '4',
  },
  {
    category: 'Function',
    question: 'Что делает функция Array.prototype.reduce()?',
    choices: [
      'Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.',
      'Метод reduce() добавляет один или более элементов в конец массива и возвращает новую длину массива.',
      'Метод reduce() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.',
    ],
    answer:
      'Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.',
  },
];

const getRandomQuestion = (questions) => {
    return questions[Math.floor(Math.random() * questions.length)];
}

const getRandomComputerChoice = (choice) => {
    return choice[Math.floor(Math.random() * choice.length)]
}

const getResults = (question, computerChoice) => {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
      } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
      }
}

console.log(getRandomQuestion(questions));