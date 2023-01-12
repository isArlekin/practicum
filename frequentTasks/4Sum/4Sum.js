function fourSum(nums, target) {
  const set = new Set();

  if (nums.length < 4) {
    return [];
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      const sum = target - a - b;
      let leftP = j + 1;
      let rightP = nums.length - 1;

      while (leftP < rightP) {
        if (nums[leftP] + nums[rightP] === sum) {
          const result = [a, b, nums[leftP], nums[rightP]];
          set.add(result.sort((a, b) => a - b).join(' '));
          leftP++;
          rightP--;
        } else if (nums[leftP] + nums[rightP] > sum) {
          rightP--;
        } else {
          leftP++;
        }
      }
    }
  }

  return Array.from(set).map(str => str.split(' '));
}
