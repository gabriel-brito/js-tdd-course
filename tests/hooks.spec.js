import { expect } from 'chai';

describe('Hooks file', () => {
  context('Testing Mocha hooks', () => {
    /* 
      O Willian Justen diz que não conseguimos declarar variáveis dentro dos
      hooks. E eu provei que isso não é verdade.
    */
    let array = [];

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
  });
});
