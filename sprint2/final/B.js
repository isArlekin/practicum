/*
 * https://contest.yandex.ru/contest/22781/run-report/79255536/
 *
 * -- ПРИНЦИП РАБОТЫ --
 * Считываем одну строку и сразу же записываем её в глобальную переменную `polishNotation`.
 * Считаем, что на вход будет подаваться только одна строка.
 *
 * Создаем переменную `operands` в которой будем хранить операнды в порядке их появления в обратной польской нотации.
 * Структура данных Stack реализована на обычном массиве.
 *
 * Пробегаемся по польской нотации от начала и до конца, берем символ и смотрим
 * Если это число, то кладем его на вершину стека
 * Если это оператор то вытаскиваем из стека два последних операнада. Тот, что лежит на самой вершине - будет правым операндом,
 * тот, что идет следом - левым операндом.
 *
 * Вызываем функцию calculateExpression для этих операндов и текущего знака
 * В самой функции определяем что это за знак и производим расчет. Возвращаемое значение используется, как новый операнд и кладется
 * на вершину стека.
 * Продолжаем выполнять цикл до конца обратной польской нотации.
 *
 * Результатом работы программы будет операнд на вершине стека.
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 *  Корректная обратная польская нотация гарантирует, что знак операции будет идти после операндов к которым он должен быть применен,
 * более того, гарантируется, что операция с большим приоритетом идет левее
 *
 * Рассмотрим два примера
 * [1] 1 + 2 * 3 -> 2 1 3 * +
 * [2] (1 + 2) * 3 -> 1 2 + 3 *
 * В примере 1 умножение имеет больше приоритет, и этот знак находится левее сложения в обратной польской нотации
 * В примере два у сложения в скобках приоритет выше, следовательно знак + идет раньше, чем умножение
 *
 *
 * Проходя по нотации слева направо и добавляя операнды в стек по мере их появления мы гарантируем, что операнды на вершине
 * принадлежат операции с большим приоритетом.
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Не считаем время затраченное на считываение обратной польской нотации и добавлению её в массив.
 *
 * Если в обратной польской нотации n символов, то каждый символ будет обработан в цикле ровно один раз.
 * Цикл идет от первого до последнего элемента
 * Можно примерно считать, что сложность алгоритма линейная O(n)
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Не рассматриваем память, необходимую для хранения строк ввода в массиве ввода
 *
 * Для преобразование обратнйо польской нотации из строки в массив нам потребуется O(n) памяти,
 * где n это число элементов.
 *
 * Будем использовать Stack для хранения операндов, отметим, что операции не помещаются в стек. В худшем случае мы будем хранить
 * ~n/2 операнда
 * Рассмотрим такой пример, где в стеке будем ~n/2 элементов
 * 1+(2+(3+(4+(5 + 6)))) -> 1 2 3 4 5 6 + + + + +
 * Т.е можно считать, что пространственная сложность алгоритма O(n + n/2) ~ O(n)
 * */
const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const expression = readArray();
  const result = calculate(expression);

  print(result);
}

function calculate(expression) {
  const operands = new Stack();

  for (const symbol of expression) {
    if (isNumber(symbol)) {
      operands.push(Number(symbol));
    } else {
      const rightOperand = operands.pop();
      const leftOperand = operands.pop();
      operands.push(calculateExpression(leftOperand, rightOperand, symbol));
    }
  }

  return operands.pop();
}

function calculateExpression(leftOperand, rightOperand, sign) {
  switch (sign) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    case '/':
      return Math.floor(leftOperand / rightOperand);
    default:
      throw new Error('Sign is not recognized!');
  }
}

function isNumber(symbol) {
  return /^-?\d+$/.test(symbol);
}

function readArray() {
  return inputLines[currentLine++].split(' ');
}

function print(result) {
  process.stdout.write(`${result}\n`);
}

class Stack {
  static ERROR = 'error';

  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return Stack.ERROR;
    }
    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
