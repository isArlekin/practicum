const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

const inputLines = [];
let currentLine = 0;

ioInterface.on('line', line => {
  inputLines.push(line);
});

ioInterface.on('close', solve);

function solve() {
  const pressedKeys = readLine();
  const result = genLetterSeq(pressedKeys, 0, '');

  print(result);
}

function genLetterSeq(pressedKeys, keyIndex, seq) {
  if (keyIndex === pressedKeys.length) {
    return seq;
  }

  const key = pressedKeys[keyIndex];
  const newIndex = keyIndex + 1;
  let result = '';

  switch (key) {
    case '2':
      result += genSeqForKey('abc');
      break;
    case '3':
      result += genSeqForKey('def');
      break;
    case '4':
      result += genSeqForKey('ghi');
      break;
    case '5':
      result += genSeqForKey('jkl');
      break;
    case '6':
      result += genSeqForKey('mno');
      break;
    case '7':
      result += genSeqForKey('pqrs');
      break;
    case '8':
      result += genSeqForKey('tuv');
      break;
    case '9':
      result += genSeqForKey('wxyz');
      break;
    default:
      throw new Error(`Provided key - ${key} is not supported!`);
  }

  function genSeqForKey(lettersOnKey) {
    let result = '';
    for (const letter of lettersOnKey) {
      result += genLetterSeq(pressedKeys, newIndex, seq + letter) + ' ';
    }
    return result.trim();
  }

  return result;
}

function readLine() {
  return inputLines[currentLine++];
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
