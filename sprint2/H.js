const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let bracketSequence = '';

ioInterface.on('line', line => {
  bracketSequence = line;
});

ioInterface.on('close', solve);

function solve() {
  print(isCorrectBracketsSeq(bracketSequence) ? 'True' : 'False');
}

function isCorrectBracketsSeq(seq) {
  const stack = [];

  for (let i = 0; i < seq.length; i++) {
    const bracket = seq[i];

    if (isOpenBracket(bracket)) {
      stack.push(seq[i]);
    } else {
      const lastOpenBracket = stack.pop();
      if (lastOpenBracket !== getOpenBracket(bracket)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function isOpenBracket(bracket) {
  switch (bracket) {
    case '{':
    case '[':
    case '(':
      return true;
    default:
      return false;
  }
}

function getOpenBracket(closeBracket) {
  switch (closeBracket) {
    case '}':
      return '{';
    case ']':
      return '[';
    case ')':
      return '(';
  }
}

function print(text) {
  process.stdout.write(`${text}\n`);
}
