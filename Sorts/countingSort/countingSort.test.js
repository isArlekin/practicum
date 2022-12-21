const countingSort = require('./countingSort');

describe('CountingSort', () => {
  it('should do nothing if array is empty', () => {
    const arr1 = [];
    expect(countingSort(arr1, 0)).toBe(arr1);
    expect(countingSort(arr1, 0)).toEqual([]);
  });

  it('should sort positive numbers within [0, k) range', () => {
    const arr1 = [2, 1, 0];
    const arr2 = [0, 1, 2, 3];
    const arr3 = [4, 4, 2, 2, 1, 0, 0];
    const arr4 = [0, 0, 0, 0];
    const arr5 = [3, 1, 2];
    const arr6 = [7];

    expect(countingSort(arr1, 3)).toEqual([0, 1, 2]);
    expect(countingSort(arr2, 3)).toEqual([0, 1, 2, 3]);
    expect(countingSort(arr3, 5)).toEqual([0, 0, 1, 2, 2, 4, 4]);
    expect(countingSort(arr4, 1)).toEqual([0, 0, 0, 0]);
    expect(countingSort(arr5, 4)).toEqual([1, 2, 3]);
    expect(countingSort(arr6, 8)).toEqual([7]);
  });
});
