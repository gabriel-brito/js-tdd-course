import { expect } from 'chai';
import { div, sum, sub, mult } from '../src/main';

describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('should exist the method sum and be a function', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub and be a function', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method mult and be a function', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method div and be a function', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Calc tests', () => {
    context('Sum tests', () => {
      it('should return 4 when sum(2, 2)', () => {
        expect(sum(2, 2)).to.be.equal(4);
      });

      it('should return 18 when sum(9, 9)', () => {
        expect(sum(9, 9)).to.be.equal(18);
      });
    });

    context('sub tests', () => {
      it('should return 4 when sub(2, 2)', () => {
        expect(sub(2, 2)).to.be.equal(0);
      });

      it('should return 18 when sub(9, 9)', () => {
        expect(sub(9, 9)).to.be.equal(0);
      });
    });

    context('mult tests', () => {
      it('should return 4 when mult(2, 2)', () => {
        expect(mult(2, 2)).to.be.equal(4);
      });

      it('should return 18 when mult(9, 9)', () => {
        expect(mult(9, 9)).to.be.equal(81);
      });
    });

    context('div tests', () => {
      it('should return 4 when div(2, 2)', () => {
        expect(div(2, 2)).to.be.equal(1);
      });

      it('should return 18 when div(9, 9)', () => {
        expect(div(9, 9)).to.be.equal(1);
      });
    });
  });
});
