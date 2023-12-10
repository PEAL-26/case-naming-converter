import { checkDataType } from '../src/index';

describe('checkDataType', () => {
  test('retorna "string" se a entrada for uma string', () => {
    const result = checkDataType('test');
    expect(result).toBe('string');
  });

  test('retorna "object" se a entrada for um objeto', () => {
    const result = checkDataType({ key: 'value' });
    expect(result).toBe('object');
  });

  test('retorna false se a entrada não for nem string nem objeto', () => {
    const result = checkDataType(123);
    expect(result).toBe('number');
  });

  test('retorna um erro se a entrada for undefined', () => {
    expect(() => checkDataType(undefined)).toThrow('Valor inválido!');
  });

  test('retorna um erro se a entrada for null', () => {
    expect(() => checkDataType(null)).toThrow('Valor inválido!');
  });

  test('verifica o tipo de dado para um array vazio', () => {
    expect(checkDataType([])).toBe('array');
  });

  test('verifica o tipo de dado para um objeto vazio', () => {
    expect(checkDataType({})).toBe('object');
  });
});
