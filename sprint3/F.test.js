const findMaxPerimeter = require('./F');

describe('FindMaxPerimeter', () => {
  it('should return 0 if there is no triangles', () => {
    expect(findMaxPerimeter([6, 1, 1])).toBe(0);
    expect(findMaxPerimeter([1, 6, 1, 7])).toBe(0);
  });

  it('should return max perimeter', () => {
    expect(findMaxPerimeter([3, 3, 2, 1])).toBe(8);
    expect(findMaxPerimeter([1, 2, 3, 1, 3])).toBe(8);
    expect(findMaxPerimeter([6, 3, 3, 2])).toBe(8);
    expect(findMaxPerimeter([5, 3, 7, 2, 8, 3])).toBe(20);
  });
});
