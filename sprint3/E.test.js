const getCountOfAffordableHomes = require('./E');

describe('GetCountOfAffordableHomes', () => {
  it('should return 0 if there is no homes', () => {
    expect(getCountOfAffordableHomes([], 100)).toBe(0);
  });

  it('should return 0 if budget is 0', () => {
    expect(getCountOfAffordableHomes([25, 100, 17, 32], 0)).toBe(0);
  });

  it('should return correct value', () => {
    expect(getCountOfAffordableHomes([100], 100)).toBe(1);
    expect(getCountOfAffordableHomes([50, 50], 100)).toBe(2);
    expect(getCountOfAffordableHomes([50, 51], 100)).toBe(1);
    expect(getCountOfAffordableHomes([101], 100)).toBe(0);
    expect(getCountOfAffordableHomes([100, 10, 10, 10, 70], 100)).toBe(4);
    expect(getCountOfAffordableHomes([123, 200, 300], 100)).toBe(0);
  });
});
