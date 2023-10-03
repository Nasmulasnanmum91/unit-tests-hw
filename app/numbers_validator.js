/* eslint-disable require-jsdoc */
export class NumbersValidator {
  // eslint-disable-next-line indent
    /**
     * Creates an istance of NumversValidator
     * @memberof NumbersValidator
     */
  constructor() {
  };
  /**
   *
   *
   * @param {Number} number number to check
   * @return {Boolean} true if element is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  }
};
