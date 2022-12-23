const countHappyChildren = require('./D');

describe('CountHappyChildren', () => {
  it('should return 0 if there is no children', () => {
    expect(countHappyChildren([], [1, 2])).toBe(0);
    expect(countHappyChildren([], [])).toBe(0);
  });

  it('should return 0 if there is no cookies', () => {
    expect(countHappyChildren([1, 2], [])).toBe(0);
    expect(countHappyChildren([], [])).toBe(0);
  });

  it('should return correct number of happy children', () => {
    expect(countHappyChildren([2, 1], [3, 2, 1])).toBe(2);
    expect(countHappyChildren([2, 1, 3], [1, 1])).toBe(1);
    expect(countHappyChildren([4, 4, 4, 4], [1, 2])).toBe(0);
    expect(countHappyChildren([2, 2], [2, 2])).toBe(2);
    expect(countHappyChildren([1, 2, 3], [2, 2])).toBe(2);
  });
});
