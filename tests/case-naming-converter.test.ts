import { camelToSnake, snakeToCamel } from '../src/index';

describe('snakeToCamel', () => {
  test('converte chaves de snake_case para camelCase', () => {
    const inputObject = { exemplo_de_snake_case: 'valor' };
    const expectedOutput = { exemploDeSnakeCase: 'valor' };
    const result = snakeToCamel(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('lança um erro ao tentar converter um objeto inválido', () => {
    const invalidInput = 'string_invalida';
    expect(() => snakeToCamel(invalidInput)).toThrow('Objeto inválido!');
  });
});

describe('camelToSnake', () => {
  test('converte chaves de camelCase para snake_case', () => {
    const inputObject = { exemploDeCamelCase: 'valor' };
    const expectedOutput = { exemplo_de_camel_case: 'valor' };
    const result = camelToSnake(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('lança um erro ao tentar converter um objeto inválido', () => {
    const invalidInput = 'string_invalida';
    expect(() => camelToSnake(invalidInput)).toThrow('Objeto inválido!');
  });
});


