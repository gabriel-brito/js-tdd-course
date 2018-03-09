var expect = require('chai').expect;
var calc =  require('../src/main.js');

describe('Calc', function(){

  //smoke tests
  describe('Smoke Tests', function(){
    it('should exist the calc lib', function () {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function () {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

   it('should exist the method `sub`', function () {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`', function () {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`', function () {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', function(){
    it('should return 6 when `sum(3,3)`', function () {
      expect(calc.sum(3,3)).to.be.equal(6);
    });
  });

  describe('Sub', function(){
    it('should return 6 when `sub(12,6)`', function () {
      expect(calc.sub(12,6)).to.be.equal(6);
    });

    it('should return -4 when `sub(6,10)`', function () {
      expect(calc.sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Mult', function(){
    it('should return 6 when `mult(2,3)`', function () {
      expect(calc.mult(2,3)).to.be.equal(6);
    });

    it('should return -36 when `mult(6,-6)`', function () {
      expect(calc.mult(6,-6)).to.be.equal(-36);
    });
  });

  describe('Div', function(){
    it('should return 2 when `div(4,2)`', function () {
      expect(calc.div(4,2)).to.be.equal(2);
    });

    it('should return `Do not divide by 0` when `div(4,0)`', function () {
      expect(calc.div(4,0)).to.be.equal('Do not divide by 0');
    });
  });


});