const brokenSearch = require('./A');

describe('FindKInBrokenArray', () => {
  it('should return -1 because there is no such k in array', () => {
    expect(brokenSearch([4, 9, 1, 3], 5)).toBe(-1);
    expect(brokenSearch([5, 6, 1, 2, 3], 7)).toBe(-1);
    expect(brokenSearch([5, 6, -1, -2, 3], -3)).toBe(-1);
    expect(brokenSearch([5], 2)).toBe(-1);
    expect(brokenSearch([], 2)).toBe(-1);
    expect(brokenSearch([5, 1], 2)).toBe(-1);
    expect(brokenSearch([1, 2], 4)).toBe(-1);
    expect(brokenSearch([2, 1], 0)).toBe(-1);
  });

  it('should return correct index', () => {
    expect(brokenSearch([-1], -1)).toBe(0);
    expect(brokenSearch([4, 9, 1, 3], 1)).toBe(2);
    expect(brokenSearch([4, 9, 1, 3], 4)).toBe(0);
    expect(brokenSearch([4, 9, 1, 3], 3)).toBe(3);
    expect(brokenSearch([-3, -2, 0, 1, 2, 3], 0)).toBe(2);
    expect(brokenSearch([-3, -2, 0, 1, 2, 3], 2)).toBe(4);
    expect(brokenSearch([3, 5, 7, 1, 2], 5)).toBe(1);
    expect(brokenSearch([3, 5, 7, 1, 2], 1)).toBe(3);
    expect(brokenSearch([9, 28, 39, 100, 2], 9)).toBe(0);
    expect(brokenSearch([9, 28, 39, 100, 2], 2)).toBe(4);
    expect(brokenSearch([3, 1, 2], 1)).toBe(1);
    expect(brokenSearch([3, 1, 2], 2)).toBe(2);
    expect(brokenSearch([3, 1, 2], 3)).toBe(0);
    expect(brokenSearch([5, 1], 1)).toBe(1);
    expect(brokenSearch([19, 21, 100, 101, 1, 4, 5, 7, 12], 5)).toBe(6);
    expect(brokenSearch([9, 1, 3, 8], 8)).toBe(3);
  });
});
