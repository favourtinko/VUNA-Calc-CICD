const { evaluateExpression } = require('../src/calculator');
describe('arithmetic', () => {
  it('adds', () => expect(evaluateExpression('2+3')).toBe(5));
  it('subtracts', () => expect(evaluateExpression('10-4')).toBe(6));
  it('multiplies', () => expect(evaluateExpression('3*4')).toBe(12));
  it('divides', () => expect(evaluateExpression('10/2')).toBe(5));
  it('rejects invalid', () => expect(() => evaluateExpression('2&3')).toThrow());
});