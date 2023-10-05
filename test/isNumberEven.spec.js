/* eslint-disable max-len */
import {NumbersValidator} from '../../unit-tests-hw/app/numbers_validator.js';
import {expect} from 'chai';

describe('Home task for unit tests', () => {
  let validator;
  beforeEach( () => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an even number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [7, 4, 8, 13, 28];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([4, 8, 28]);
  });

  it('should throw an error when provided an array with non-number elements', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1, 2, '7', 4]);
    }).to.throw(Error, '[1,2,7,4] is not an array of "Numbers"');
  });

  it('should return true when provided array of numbers', () => {
    const validationResults = validator.isAllNumbers([5, 1, 16, 7, 48]);
    expect(validationResults).to.be.eql(true);
  });

  it('should throw an error when provided not array of numbers', () => {
    expect(() => {
      validator.isAllNumbers('a');
    }).to.throw(Error, '[a] is not an array');
  });


  it('should return true when provided with an integer', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with a float number', () => {
    const validationResults = validator.isInteger(3.1);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a non-number', () => {
    expect(() => {
      validator.isInteger('2');
    }).to.throw(Error, '[2] is not a number');
  });
});
