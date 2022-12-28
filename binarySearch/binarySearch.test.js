const { binarySearch, recursiveBinarySearch } = require('./binarySearch');

describe('BinarySearch', () => {
  describe('RecursiveBinarySearch', () => {
    it('should return -1 for element that is not presented in the array', () => {
      const arr1 = [];
      const arr2 = [-4, -3, 0, 1, 4, 9];
      const arr3 = [1, 1, 1, 1, 2, 2, 2, 3];
      const arr4 = [0, 0];
      const arr5 = [-6, -5, -4, -3, -2];

      expect(recursiveBinarySearch(arr1, 1, 0, 0)).toBe(-1);
      expect(recursiveBinarySearch(arr2, 7, 0, arr2.length)).toBe(-1);
      expect(recursiveBinarySearch(arr3, 0, 0, arr3.length)).toBe(-1);
      expect(recursiveBinarySearch(arr4, 1, 0, arr4.length)).toBe(-1);
      expect(recursiveBinarySearch(arr5, -9, 0, arr5.length)).toBe(-1);
    });

    it('should return correct index of element from array', () => {
      const arr1 = [1];
      const arr2 = [1, 2, 3, 4, 5];
      const arr3 = [2, 2, 2];
      const arr4 = [-9, -4, -2, 0, 3, 6, 10, 18];

      expect(recursiveBinarySearch(arr1, 1, 0, 1)).toBe(0);
      expect(recursiveBinarySearch(arr2, 4, 0, 5)).toBe(3);
      expect(recursiveBinarySearch(arr3, 2, 0, 3)).toBe(1);
      expect(recursiveBinarySearch(arr4, -9, 0, 8)).toBe(0);
    });
  });

  describe('IterativeBinarySearch', () => {
    it('should return -1 for element that is not presented in the array', () => {
      const arr1 = [];
      const arr2 = [-4, -3, 0, 1, 4, 9];
      const arr3 = [1, 1, 1, 1, 2, 2, 2, 3];
      const arr4 = [0, 0];
      const arr5 = [-6, -5, -4, -3, -2];

      expect(binarySearch(arr1, 1, 0, 0)).toBe(-1);
      expect(binarySearch(arr2, 7, 0, arr2.length)).toBe(-1);
      expect(binarySearch(arr3, 0, 0, arr3.length)).toBe(-1);
      expect(binarySearch(arr4, 1, 0, arr4.length)).toBe(-1);
      expect(binarySearch(arr5, -9, 0, arr5.length)).toBe(-1);
    });

    it('should return correct index of element from array', () => {
      const arr1 = [1];
      const arr2 = [1, 2, 3, 4, 5];
      const arr3 = [2, 2, 2];
      const arr4 = [-9, -4, -2, 0, 3, 6, 10, 18];

      expect(binarySearch(arr1, 1, 0, 1)).toBe(0);
      expect(binarySearch(arr2, 4, 0, 5)).toBe(3);
      expect(binarySearch(arr3, 2, 0, 3)).toBe(1);
      expect(binarySearch(arr4, -9, 0, 8)).toBe(0);
    });
  });
});
