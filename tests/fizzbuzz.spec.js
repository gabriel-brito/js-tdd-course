import { expect } from 'chai';
import { fizzbuzz } from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  describe('FizzBuzz Smoke Tests', () => {
    it('should expect fizzbuzz method to exist', () => {
      expect(fizzbuzz).to.exist;
    });

    it('should expect fizzbuzz to be a method', () => {
      expect(fizzbuzz).to.be.a('function');
    });
  });

  describe('FizzBuzz Case Tests', () => {
    it('should expect fizzbuzz receive an parameter divisible by 3, return "fizz"', () => {
      expect(fizzbuzz(3)).to.be.equal('fizz');
    });

    it('should expect fizzbuzz receive an parameter divisible by 5, return "buzz"', () => {
      expect(fizzbuzz(5)).to.be.equal('buzz');
    });

    it('should expect fizzbuzz receive an parameter divisible by 5 and 3, return "fizzbuzz"', () => {
      expect(fizzbuzz(15)).to.be.equal('fizzbuzz');
    });

    it('should expect fizzbuzz receive an parameter that is not a number, return "invalid param"', () => {
      expect(fizzbuzz('7')).to.be.equal('invalid param');
      expect(fizzbuzz()).to.be.equal('invalid param');
      expect(fizzbuzz(undefined)).to.be.equal('invalid param');
      expect(fizzbuzz({})).to.be.equal('invalid param');
    });

  });
});