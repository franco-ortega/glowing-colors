import { colorCode, colorPicker } from './utils';

describe('tests for utils functions', () => {

  describe('returns an integer between 0 and 255', () => {

    test('returns a number', () => {
      const result = colorCode();
      const expected = (typeof result === 'number');

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

  describe('returns an rgb value', () => {

    test('returns a string', () => {
      const result = colorPicker();
      const expected = typeof result === 'string';

      expect(result).toBeTruthy();
      expect(expected).toBe(true);
    });


  });
});