/*
 * https://contest.yandex.ru/contest/22781/run-report/79275150/
 *
 * -- ПРИНЦИП РАБОТЫ --
 * Считываен ввод и записываем каждую строку в массив `inputLines`.
 * Считаем, что в первой строке находится кол-во команд, во второй размер кольцевого буффера для структуры Дэк.
 * Начиная с третьей строки записаны команды
 *
 * Для удобства выполнения команд над структурой Дэк превращаем каждую команду вида `command commandValue?` в массив вида
 * [command, commandValue?], где `commandValue` отсутствует для команды `pop_front` и `pop_back`
 *
 * Создаем структуру Дэк и в цикле выполняем все команды
 * Т.к команда записана в виде строки (e.g. `push_front`), то для того, чтобы её выполнить достаточно к экземпляру класса Deque
 * обратиться через квадратные скобки в следующем виде
 * deque[command]
 * Поскольку все команды это по сути вызов функции, то при обращениие по свойству `command` в объекте `deque` будет возвращена
 * функция, которую можно вызвать следующим образом
 * deque[command](commandValue)
 *
 * Как было сказано ранее, commandValue будет отсутствовать для двух команд и в этом случае на вход функции будет передан `undefined`
 *
 * Результат выполнения каждой команды помещается в массив. Если результат команды `undefined` то мы считаем, что произошло успешное
 * добавление элемента в начало или конец Дэка.
 *
 * В коце работы программы склеиваем массив в строку добавляя символ переноса строки.
 *
 * -- ПРИНЦИП РАБОТЫ Deque --
 *  По требованию в задаче Дэк должен быть реализован на кольцевом буффере.
 * В качестве структуры, в которой будут храниться все элементы используется массив фиксированной длинны
 * При инициализации экземпляра класса создаются два указателя head and tail.
 * При добавлении элемента в конце структуры будет использован указатель tail. Данный указатель всегда указывает на следующий
 * пустой элемент.
 * Для того, чтобы при достижении конца массива, указатель был передвинут на начало - используется операция находждения остатка от деления
 *
 * tail = (tail + 1) mod maxSize;
 *
 * Для того, чтобы удалить элемент с конца структуры, нам надо сначало передвинуть указатель tail на один элемент влево.
 * Рассмотрим следующий пример
 * [T, ,H, , ]
 * [x,x,1,2,3], где x - пустая ячейка, H - head, T - tail
 * Если из tail вычесть 1, то указатель выйдет за пределы границ массива. Чтобы этого избежать мы добавляем максимальный размер
 * массива и выполняем операцию деления, для получения остатка
 * (tail - 1 + maxSize) mod maxSize -> (0 - 1 + 5) mod 5 = 4
 * Для чего нам деление с остатком?
 * Рассмотрим следующий пример
 * [ ,T, ,H, ]
 * [3,x,x,1,2]
 * Если мы посчитаем это выражение (tail - 1 + maxSize), то получим 5 и выйдем за границы массива, чтобы этого избежать
 * находим отстаток от деления на размер массива (5).
 *
 * При добавлении элемента в начало структуры будем использовать указатель head. В любой момент времени он указывает на первый добавленный элемент
 *
 * Для того, чтобы добавить элемент нам нужно сдвинуть указатель head на один элемент влево.
 * Воспользуемся выражением, которое описано выше для указателя tail
 * head = (head - 1 + maxSize) mod maxSize
 *
 * Т.к head в любой момент времени указывает на первый добавленный элемент, то извлечь его достаточно просто.
 * Обновим указатель следующим образом
 * head = (head + 1) mod maxSize
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Для того, чтобы доказать, что структура дэк реализована верно, нужно доказать, что указатели head и tail не могут выйти за
 * границы изначального массива
 *
 * У нас четыре метода, в работе которых участвуют эти указатели: pop_front, pop_back, push_front и push_back
 * рассмотрим все варианты обновления значения этих указателей
 * [1] tail = (tail + 1) mod maxSize
 * [2] tail = (tail - 1 + maxSize) mod maxSize
 * [3] head = (head + 1) mod maxSize
 * [4] head = (head - 1 + maxSize) mod maxSize
 *
 * Поскольку используется операция нахождения остатка от деления, то как результат мы получим значения в диапазоне [0, maxSize - 1]
 * Все элементы массива как раз и находятся в диапазоне [0, maxSize - 1]
 * Индекс не может быть отрицательным, т.к к выражениям, где используется знак `-` мы прибавляем maxSize.
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Не рассматриваем время, затраченно на чтение всех строк ввода.
 *
 * Если n, это число команд, то сложно алгоритма O(n) т.к мы проходим в цикле по всем командам ровно один раз от начала и до конца
 * Каждая команда выполняется за О(1) по скольку под капотом происходит либо запись элемента в массив по конкретному индексу, либо
 * чтение из массива по индексу. Во время работы программы длинна массива остается постоянной.
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Не рассматриваем память, необходимую для хранения всех строк ввода.
 *
 * Если n, это число команд, то алгоритму потребуется O(n) памяти, для хранения всех команд в массиве. Каждая команда это массив из двух элементов, будет считать,
 * что размер команды константа.
 *
 * Будем считать, что k это количество элементов, которое мы храним в структуре Deque. Следовательно в случае, когда мы только добавляем
 * элементы в Deque и ничего не извлекаем, мы затратим O(k) памяти.
 *
 * Исходя из этого, мы может считать, что пространственная сложность всего алгоритма O(n + k)
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
  const totalCommands = readNumber();
  const dequeSize = readNumber();
  const commands = readCommands();
  const deque = new Deque(dequeSize);
  const result = [];

  for (let i = 0; i < totalCommands; i++) {
    const [operation, value] = commands[i];
    const commandResult = deque[operation](value);

    if (commandResult !== undefined) {
      result.push(commandResult);
    }
  }

  printArr(result);
}

function readCommands() {
  const commands = [];
  for (let i = 2; i < inputLines.length; i++) {
    commands.push(inputLines[i].split(' '));
  }
  return commands;
}

function readNumber() {
  return Number(readLine());
}

function readLine() {
  return inputLines[currentLine++];
}

function printArr(arr) {
  process.stdout.write(arr.join('\n'));
}

class Deque {
  static ERROR = 'error';

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this.head = 0;
    this.tail = 0;
    this.array = new Array(maxSize);
  }

  push_front(element) {
    if (this.is_full()) {
      return Deque.ERROR;
    }

    this.head = (this.head - 1 + this.maxSize) % this.maxSize;
    this.array[this.head] = element;

    this.size++;
  }

  push_back(element) {
    if (this.is_full()) {
      return Deque.ERROR;
    }

    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size++;
  }

  pop_front() {
    if (this.is_empty()) {
      return Deque.ERROR;
    }
    const element = this.array[this.head];
    this.array[this.head] = undefined;
    this.head = (this.head + 1) % this.maxSize;

    this.size--;
    return element;
  }

  pop_back() {
    if (this.is_empty()) {
      return Deque.ERROR;
    }
    this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
    const element = this.array[this.tail];
    this.array[this.tail] = undefined;
    this.size--;
    return element;
  }

  is_full() {
    return this.size === this.maxSize;
  }

  is_empty() {
    return this.size === 0;
  }
}
