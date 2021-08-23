import { colorCode } from './utils';

describe('test for utils functions', () => {

  describe('returns an integer between 0 and 255', () => {
    test('return a number', () => {
      const result = colorCode();
      const expected = (typeof result === 'number');
      console.log(typeof result);

      expect(expected).toBe(true);
    });


  });
});