function threeSumBruteForce(nums, target) {
  const triples = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          const result = [nums[i], nums[j], nums[k]];
          result.sort((a, b) => a - b);
          triples.add(result.join(' '));
        }
      }
    }
  }

  return triples;
}

function threeSum(nums, target) {
  const set = new Set();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    if (a > 0) {
      break;
    }

    let leftP = i + 1;
    let rightP = nums.length - 1;

    while (leftP < rightP) {
      const b = -nums[leftP];
      const c = -nums[rightP];

      if (a === b + c) {
        const result = [nums[i], nums[leftP], nums[rightP]];
        set.add(result.sort((a, b) => a - b).join(' '));
        leftP++;
        rightP--;
      } else if (b + c > a) {
        leftP++;
      } else {
        rightP--;
      }
    }
  }

  return Array.from(set.keys()).map(str => str.split(' '));
}
