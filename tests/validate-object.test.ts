import { verifyInputType } from '../src/index';

describe('VerifyInputType', () => {
  test('retorna "string" se a entrada for uma string', () => {
    const result = verifyInputType('test');
    expect(result).toBe('string');
  });

  test('retorna "object" se a entrada for um objeto', () => {
    const result = verifyInputType({ key: 'value' });
    expect(result).toBe('object');
  });

  test('retorna false se a entrada não for nem string nem objeto', () => {
    const result = verifyInputType(123);
    expect(result).toBe(false);
  });

  test('retorna um erro se a entrada for undefined', () => {
    expect(() => verifyInputType(undefined)).toThrow('Valor inválido!');
  });

  test('retorna um erro se a entrada for null', () => {
    expect(() => verifyInputType(null)).toThrow('Valor inválido!');
  });
});
