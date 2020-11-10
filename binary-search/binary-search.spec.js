describe('Binary Search', () => {
  let sortedArray;
  beforeEach(() => {
    sortedArray = [1,4,7,9,10,14,19,23,28,45,92];
  });

  describe('Iterative linear search', () => {
    it('should find the number 9', () => {
      expect(iterativeLinearSearch(sortedArray, 9)).toEqual(true);
    });
    it('should find the number 28', () => {
      expect(iterativeLinearSearch(sortedArray, 28)).toEqual(true);
    });
    it('should find the number 75', () => {
      expect(iterativeLinearSearch(sortedArray, 75)).toEqual(false);
    });
    it('should NOT find the number 16', () => {
      expect(iterativeLinearSearch(sortedArray, 16)).toEqual(false);
      // expect(this).toEqual(100);
      console.log(this)
    });
  });

  describe('Iterative binary search', () => {
    it('should find the number 9', () => {
      expect(iterativeBinarySearch(sortedArray, 9)).toEqual(true);
    });
    it('should find the number 28', () => {
      expect(iterativeBinarySearch(sortedArray, 28)).toEqual(true);
    });
    it('should find the number 75', () => {
      expect(iterativeBinarySearch(sortedArray, 75)).toEqual(false);
    });
    it('should NOT find the number 16', () => {
      expect(iterativeBinarySearch(sortedArray, 16)).toEqual(false);
    });
  });


  describe('Recursive binary search', () => {
    it('should find the number 9', () => {
      expect(recursiveBinarySearch(sortedArray, 9)).toEqual(true);
    });
    it('should find the number 28', () => {
      expect(recursiveBinarySearch(sortedArray, 28)).toEqual(true);
    });
    it('should find the number 75', () => {
      expect(recursiveBinarySearch(sortedArray, 75)).toEqual(false);
    });
    it('should NOT find the number 16', () => {
      expect(recursiveBinarySearch(sortedArray, 16)).toEqual(false);
    });
  });
});