const findMaxKUniversityIds = require('./I');

describe('findMaxKUniversityIds', () => {
  it('should return k ids in decreasing order', () => {
    expect(findMaxKUniversityIds([1, 2, 3, 1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(findMaxKUniversityIds([1, 2, 3, 1, 2, 3, 4, 4, 4], 4)).toEqual([4, 1, 2, 3]);
    expect(findMaxKUniversityIds([3, 1, 2, 4, 1, 3, 2], 3)).toEqual([1, 2, 3]);
    expect(findMaxKUniversityIds([3, 1, 2, 4, 1, 3, 2], 1)).toEqual([1]);
    expect(findMaxKUniversityIds([3, 1, 2, 1, 1, 2], 1)).toEqual([1]);
    expect(findMaxKUniversityIds([3, 1, 2, 1, 1, 2], 2)).toEqual([1, 2]);
    expect(findMaxKUniversityIds([7], 1)).toEqual([7]);
    expect(findMaxKUniversityIds([6, 7, 1, 10000, 10000, 10000], 1)).toEqual([10000]);

    const arr =
      '8020 1750 2134 7336 2823 6600 2823 7920 5920 1750 6600 5920 1750 7920 6600 5518 3753 6600 6600 3753 5920 7667 3753 2823 2134 2823 6600 5920 8197 7336 4308 3753 2823 7086 7920 5920 1161 5920 5518 7920 1750 7336 1750 5518 7920 5518 5518 2823 6600 7336 2823 2823 6600 5518 3753 5518 3753 3753 1750 1750 3155 2823 983 983 8197 4458 2823 1750 6600 5518 8197 5518 7336 2823 1750 7920 3753 2823 4458 7920 1750 6600 4458 8197 1161 3753 5920 1161 6600 1750 2823 2134 7336 2392 1161 4458 5920 5518 7920 1750 6600 4458 8197 5920 5518 7336 1750 3753 2823 4458'.split(
        ' ',
      );
    expect(findMaxKUniversityIds(arr, 13)).toEqual(
      '2823 1750 6600 5518 3753 5920 7920 7336 4458 8197 1161 2134 983'.split(' '),
    );
  });

  it('should return k ids in decreasing order but if there are universities with the same amount of student sort them in non-decreasing', () => {
    expect(findMaxKUniversityIds([3, 3, 3, 1, 1, 1], 2)).toEqual([1, 3]);
    expect(findMaxKUniversityIds([3, 1, 2, 2, 2], 3)).toEqual([2, 1, 3]);
  });
});
