const expect = require('chai').expect;
const calc = require('../src/main');

describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method sum from calc and be a function', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method sub from calc and be a function', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method mult from calc and be a function', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method div from calc and be a function', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Calc tests', () => {
    context('Sum tests', () => {
      it('should return 4 when sum(2, 2)', () => {
        expect(calc.sum(2, 2)).to.be.equal(4);
      });

      it('should return 18 when sum(9, 9)', () => {
        expect(calc.sum(9, 9)).to.be.equal(18);
      });
    });

    context('sub tests', () => {
      it('should return 4 when sub(2, 2)', () => {
        expect(calc.sub(2, 2)).to.be.equal(0);
      });

      it('should return 18 when sub(9, 9)', () => {
        expect(calc.sub(9, 9)).to.be.equal(0);
      });
    });

    context('mult tests', () => {
      it('should return 4 when mult(2, 2)', () => {
        expect(calc.mult(2, 2)).to.be.equal(4);
      });

      it('should return 18 when mult(9, 9)', () => {
        expect(calc.mult(9, 9)).to.be.equal(81);
      });
    });

    context('div tests', () => {
      it('should return 4 when div(2, 2)', () => {
        expect(calc.div(2, 2)).to.be.equal(1);
      });

      it('should return 18 when div(9, 9)', () => {
        expect(calc.div(9, 9)).to.be.equal(1);
      });
    });
  });
});
