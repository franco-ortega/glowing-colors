import { colorCode } from './utils';

describe('test for utils functions', () => {

  describe('return an integer between 0 and 255', () => {
    test('returns a number', () => {
      const result = colorCode();
      const expected = (typeof result === 'number');
      console.log(typeof result);

      expect(expected).toBe(true);
    });

    test('returns a number between 0 and 255', () => {
      const result = colorCode();
      const expected = (0 <= result <= 255);

      expect(expected).toBe(true);
    });
    test('returns an integer', () => {
      const result = colorCode();
      const expected = Number.isInteger(result);

      expect(expected).toBe(true);
    });

  });
});