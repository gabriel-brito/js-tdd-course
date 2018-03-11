import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', ()=>{

  //smoke tests
  describe('Smoke Test', ()=> {
    it('should return true if `FizzBuzz` exist', ()=>{
      expect(FizzBuzz).to.be.a('function');
    });
  });

  describe('FizzBuzz', ()=>{

    it('should return `Fizz` when multiple of 3', ()=> {
      expect(FizzBuzz(3)).to.be.equal('Fizz');
    });

    it('should return `Buzz` when multiple of 5', ()=> {
      expect(FizzBuzz(5)).to.be.equal('Buzz');
    });

    it('should return `FizzBuzz` when multiple of 3 and multiple of 5', ()=> {
      expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    });

    it('should return the number when non-multiple', ()=> {
      expect(FizzBuzz(7)).to.be.equal(7);
    });

  });

});