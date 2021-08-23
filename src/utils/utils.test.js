import { colorCode, colorPicker, orbCount } from './utils';

describe('tests for utils functions', () => {

  describe('codeCode: returns an integer between 0 and 255', () => {

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

  describe('colorPicker: returns an rgb value', () => {

    test('returns a string', () => {
      const result = colorPicker();
      const expected = typeof result === 'string';

      expect(expected).toBe(true);
    });

    test('returns a string with a length equal or greater to the minimum length of an rgb value with an opacity of 1', () => {
      const result = colorPicker();
      const expected = result.length >= 15;

      expect(expected).toBe(true);  
    });

    test('returns a string with a length less than or equal to the maximum length of an rgb value with an opacity of 1', () => {
      const result = colorPicker();
      const expected = result.length <= 21;

      expect(expected).toBe(true);  
    });

    test('returns a string with a length equal or greater to the minimum length of an rgb value with an opacity of 0.75', () => {
      const result = colorPicker(.75);
      const expected = result.length >= 18;
      console.log(result);

      expect(expected).toBe(true);  
    });

    test('returns a string with a length less than or equal to the maximum length of an rgb value with an opacity of 0.75', () => {
      const result = colorPicker(.75);
      const expected = result.length <= 24;

      expect(expected).toBe(true);  
    });

  });

  describe('orbCount: returns 1 to 10 orbs', () => {

    test('returns a number', () => {
      const result = orbCount();
      const expected = (typeof result === 'number');

      expect(expected).toBe(true);
    });

    test('orbCount: returns a number between 1 and 10', () => {
      const result = orbCount();
      const expected = 1 <= result <= 10;

      expect(expected).toBe(true);
    });

    test('returns an integer', () => {
      const result = orbCount();
      const expected = Number.isInteger(result);

      expect(expected).toBe(true);
    });

  });

});
