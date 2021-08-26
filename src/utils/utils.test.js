import { borderPicker, boxShadowPicker, colorPicker, heightPicker, orbCount, positionPicker } from './utils';

describe('tests for utils functions', () => {

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

      expect(expected).toBe(true);  
    });

    test('returns a string with a length less than or equal to the maximum length of an rgb value with an opacity of 0.75', () => {
      const result = colorPicker(.75);
      const expected = result.length <= 24;

      expect(expected).toBe(true);  
    });

  });

  describe('borderPicker: returns a string to style a border', () => {

    test('returns a string', () => {
      const result = borderPicker();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('returns a string with a length equal or greater to the minimum length of the border properties: medium solid rbg(color values and opacity of length 1, such as "1")', () => {
      const result = borderPicker();
      const expected = result.length >= 28;

      expect(expected).toBe(true);  
    });


    test('returns a string with a length equal or greater to the minimum length of the border properties: medium solid rbg(color values and opacity of length 3, such as "0.75")', () => {
      const result = borderPicker(.75);
      const expected = result.length <= 37;

      expect(expected).toBe(true);  
    });

  });

  describe('boxShadowPicker: returns a string to style a border', () => {

    test('returns a string', () => {
      const result = boxShadowPicker();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('returns a string with a length equal or greater to the minimum length of the box-shadow properties: 0 0 1vw 1vw rbg(0, 0, 0, 1)', () => {
      const result = boxShadowPicker();
      const expected = result.length >= 27;

      expect(expected).toBe(true);  
    });

    test('returns a string with a length equal or greater to the maximum length of the box-shadow properties:  0 0 11.5vw 1.5vw rbg(100, 100, 100, 1)', () => {
      const result = boxShadowPicker();
      const expected = result.length <= 38;

      expect(expected).toBe(true);  
    });

  });

  describe('positionPicker: returns a string used to determine position values', () => {

    test('returns a string', () => {
      const result = positionPicker();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('characters before the last "%" character can be coerced to numbers, such as 5% or 47%', () => {
      const result = positionPicker();
      const numberValueAsString = result.slice(0, -1);
      const expected = numberValueAsString == Number(numberValueAsString);

      expect(expected).toBe(true);
    });

    test('numbers in string are between 0 and 75', () => {
      const result = positionPicker();
      const numberValueAsString = result.slice(0, -1);
      const expected = 1 <= numberValueAsString <= 75;

      expect(expected).toBe(true);
    });

  });

  describe('heightPicker: returns a string used to determine the height in pixel', () => {

    test('returns a string', () => {
      const result = heightPicker();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('characters before the "px" characters at the end can be coerced to a number, such as 5px or 47px', () => {
      const result = heightPicker();
      const numberValueAsString = result.slice(0, -2);
      const expected = numberValueAsString == Number(numberValueAsString);

      expect(expected).toBe(true);
    });

    test('numbers in string are between 0 and 200', () => {
      const result = heightPicker();
      const numberValueAsString = result.slice(0, -1);
      const expected = 0 <= numberValueAsString <= 200;

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
