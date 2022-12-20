const { merge_sort, merge } = require('./mergeSort');

describe('MergeSort', () => {
  describe('merge', () => {
    it('should sort an array of two elements', () => {
      const arr1 = [4, 1];
      const arr2 = [1, 4];
      const arr3 = [0, -1];

      expect(merge(arr1, 0, 1, 2)).toEqual([1, 4]);
      expect(merge(arr2, 0, 1, 2)).toEqual([1, 4]);
      expect(merge(arr3, 0, 1, 2)).toEqual([-1, 0]);

      expect(arr1).toEqual([1, 4]);
      expect(arr2).toEqual([1, 4]);
      expect(arr3).toEqual([-1, 0]);
    });

    it('should sort an array of three elements', () => {
      const arr1 = [1, 4, 0];
      const arr2 = [0, 1, 4];
      const arr3 = [-2, 0, 7];

      expect(merge(arr1, 0, 2, 3)).toEqual([0, 1, 4]);
      expect(merge(arr2, 0, 2, 3)).toEqual([0, 1, 4]);
      expect(merge(arr3, 0, 2, 3)).toEqual([-2, 0, 7]);

      expect(arr1).toEqual([0, 1, 4]);
      expect(arr2).toEqual([0, 1, 4]);
      expect(arr3).toEqual([-2, 0, 7]);

      const arr4 = [1, 0, 4];
      const arr5 = [7, -7, -5];
      expect(merge(arr4, 0, 1, 3)).toEqual([0, 1, 4]);
      expect(merge(arr5, 0, 1, 3)).toEqual([-7, -5, 7]);
      expect(arr4).toEqual([0, 1, 4]);
      expect(arr5).toEqual([-7, -5, 7]);
    });

    it('should sort an array of four elements', () => {
      const arr1 = [1, 4, 0, 2];
      const arr2 = [-1, 0, 1, 3];
      const arr3 = [-3, -2, -8, -7];
      const arr4 = [-999999997, -999999996, -999999999, -999999998];

      expect(merge(arr1, 0, 2, 4)).toEqual([0, 1, 2, 4]);
      expect(merge(arr2, 0, 2, 4)).toEqual([-1, 0, 1, 3]);
      expect(merge(arr3, 0, 2, 4)).toEqual([-8, -7, -3, -2]);
      expect(merge(arr4, 0, 2, 4)).toEqual([-999999999, -999999998, -999999997, -999999996]);

      expect(arr1).toEqual([0, 1, 2, 4]);
      expect(arr2).toEqual([-1, 0, 1, 3]);
    });
  });

  describe('mergeSort', () => {
    it('should not do anything with an empty array', () => {
      const arr = [];
      merge_sort(arr, 0, 0);
      expect(arr).toEqual([]);
    });

    it('it should sort elements', () => {
      const arr1 = [1];
      const arr2 = [2, 1];
      const arr3 = [4, 1, 2, 0];
      const arr4 = [10, 8, 0, -7];
      const arr5 = [0, 0, 0];

      merge_sort(arr1, 0, 1);
      merge_sort(arr2, 0, 2);
      merge_sort(arr3, 0, 4);
      merge_sort(arr4, 0, 4);
      merge_sort(arr5, 0, 3);

      expect(arr1).toEqual([1]);
      expect(arr2).toEqual([1, 2]);
      expect(arr3).toEqual([0, 1, 2, 4]);
      expect(arr4).toEqual([-7, 0, 8, 10]);
      expect(arr5).toEqual([0, 0, 0]);
    });
  });
});
