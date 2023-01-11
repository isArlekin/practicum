function hash(str) {
  const a = 1000;
  const m = 123987123;
  const length = str.length;

  if (length === 0) {
    return 0;
  }

  if (length === 1) {
    return str.charCodeAt(0) % m;
  }
  let result = 0 % m;

  for (let i = 0; i < length - 1; i++) {
    result = ((result + str.charCodeAt(i)) * a) % m;
  }

  const lastChar = str.charCodeAt(length - 1) % m;

  return result + lastChar;
}

function generate() {
  const module = 39;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (i !== j && i % module === j % module) {
        console.info(i);
        console.info(j);
        console.info('===============');
      }
    }
  }
}

generate();
