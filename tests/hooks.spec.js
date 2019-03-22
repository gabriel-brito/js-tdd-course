const { expect } = require('chai');

describe('Hooks file', () => {
  context('Testing Mocha hooks', () => {
    /* 
      O Willian Justen diz que não conseguimos declarar variáveis dentro dos
      hooks. E eu provei que isso não é verdade.
    */

    before(() => {
      let array = [];
    });

    beforeEach(() => {
      array = [1, 2, 3];
    });

    it('should have 2 objects when array pass here', () => {
      array.pop();

      expect(array).to.have.length(2);
    });

    it('should have 4 objects when array pass here', () => {
      array.push(4);
      expect(array).to.have.length(4);
    });

    it('should be an empty array when arrive here', () => {
      array = [];

      expect(array).to.have.length(0);
    });

    afterEach(() => {
      array = [1, 2, 3];
    });

    after(() => {
      let array2 = [4, 5, 6];
      array = [];
      console.log('Array1.lenght: ', array.length);
      console.log('Array2.lenght: ', array2.length);
    });
  });
});
