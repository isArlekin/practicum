function getRollingHashes(nums, windowSize) {
  const a = 7;
  const m = 10e9 + 7;
  const powers = getPowers(a, nums.length, m);
  const hashes = [];
  let windowHash = 0;

  let i = 0;
  while (i < windowSize) {
    windowHash = (windowHash * a + nums[i]) % m;
    i++;
  }
  hashes.push(windowHash);

  for (let i = windowSize; i < nums.length; i++) {
    const previousTerm = nums[i - windowSize] * powers[windowSize - 1];
    windowHash = mod((windowHash - previousTerm) * a + nums[i], m);
    hashes.push(windowHash);
  }

  return hashes;
}

console.info(getRollingHashes([1, 2, 3, 2, 1], 3));

function getPowers(a, n, m) {
  const pows = [1];

  for (let i = 1; i < n; i++) {
    pows.push((pows[i - 1] * a) % m);
  }

  return pows;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
