import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () =>{

  //smoke tests
  describe('Smoke Tests', () =>{

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

   it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', ()=>{
    it('should return 6 when `sum(3,3)`', () => {
      expect(sum(3,3)).to.be.equal(6);
    });
  });

  describe('Sub', ()=>{
    it('should return 6 when `sub(12,6)`', () => {
      expect(sub(12,6)).to.be.equal(6);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Mult', ()=>{
    it('should return 6 when `mult(2,3)`', () => {
      expect(mult(2,3)).to.be.equal(6);
    });

    it('should return -36 when `mult(6,-6)`', () => {
      expect(mult(6,-6)).to.be.equal(-36);
    });
  });

  describe('Div', ()=>{
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4,2)).to.be.equal(2);
    });

    it('should return `Do not divide by 0` when `div(4,0)`', () => {
      expect(div(4,0)).to.be.equal('Do not divide by 0');
    });
  });


});