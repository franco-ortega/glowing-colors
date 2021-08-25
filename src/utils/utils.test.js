import { colorPicker, orbCount, selectPosition, shadowBlur, shadowSpread } from './utils';

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

  describe('shadowBlur: sets the box-shadow between 3vw and 15vw', () => {

    test('returns a string', () => {
      const result = shadowBlur();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('characters before the last two "vw" character can be coerced to numbers, such as 2vw or 4.75vw', () => {
      const result = shadowBlur();
      const numberValueAsString = result.slice(0, -2);
      const expected = numberValueAsString == Number(numberValueAsString);

      expect(expected).toBe(true);
    });

    test('numbers in string are between 3 and 15', () => {
      const result = shadowBlur();
      const numberValueAsString = result.slice(0, -2);
      const expected = 3 <= numberValueAsString <= 15;

      expect(expected).toBe(true);
    });

  });

  describe('shadowSpread: sets the box-shadow between 1vw and 5vw', () => {

    test('returns a string', () => {
      const result = shadowSpread();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('characters before the last two "vw" character can be coerced to numbers, such as 2vw or 4.75vw', () => {
      const result = shadowSpread();
      const numberValueAsString = result.slice(0, -2);
      const expected = numberValueAsString == Number(numberValueAsString);

      expect(expected).toBe(true);
    });

    test('numbers in string are between 1 and 5', () => {
      const result = shadowSpread();
      const numberValueAsString = result.slice(0, -2);
      const expected = 1 <= numberValueAsString <= 5;

      expect(expected).toBe(true);
    });

  });

  describe('selectPosition: returns a string used to determine position values', () => {

    test('returns a string', () => {
      const result = selectPosition();
      const expected = (typeof result === 'string');

      expect(expected).toBe(true);
    });

    test('characters before the last "%" character can be coerced to numbers, such as 5% or 47%', () => {
      const result = selectPosition();
      const numberValueAsString = result.slice(0, -1);
      const expected = numberValueAsString == Number(numberValueAsString);

      expect(expected).toBe(true);
    });

    test('numbers in string are between 0 and 75', () => {
      const result = selectPosition();
      const numberValueAsString = result.slice(0, -1);
      const expected = 1 <= numberValueAsString <= 75;

      expect(expected).toBe(true);
    });


  });

});
