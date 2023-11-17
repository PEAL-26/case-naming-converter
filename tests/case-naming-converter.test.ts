import { camelToSnake, snakeToCamel } from '../src/index';

describe('snakeToCamel', () => {
  test('converte chaves de snake_case para camelCase', () => {
    const inputObject = { exemplo_de_snake_case: 'valor' };
    const expectedOutput = { exemploDeSnakeCase: 'valor' };
    const result = snakeToCamel(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('converte string de snake_case para camelCase', () => {
    const inputObject = 'exemplo_de_snake_case';
    const expectedOutput = 'exemploDeSnakeCase';
    const result = snakeToCamel(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('converte chaves de snake_case para camelCase recursivamente', () => {
    const inputObject = {
      exemplo_de_snake_case: {
        exemplo_de_snake_case: 'valor',
        exemplo_de_snake_case2: {
          exemplo_de_snake_case3: 'valor',
        },
      },
    };
    const expectedOutput = {
      exemploDeSnakeCase: {
        exemploDeSnakeCase: 'valor',
        exemploDeSnakeCase2: {
          exemploDeSnakeCase3: 'valor',
        },
      },
    };
    const result = snakeToCamel(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('lança um erro ao tentar converter um valor inválido', () => {
    const invalidInput = null;
    expect(() => snakeToCamel(invalidInput)).toThrow('Valor inválido!');
  });
});

describe('camelToSnake', () => {
  test('converte chaves de camelCase para snake_case', () => {
    const inputObject = { exemploDeCamelCase: 'valor' };
    const expectedOutput = { exemplo_de_camel_case: 'valor' };
    const result = camelToSnake(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('converte string de camelCase para snake_case', () => {
    const inputObject = 'exemploDeSnakeCase';
    const expectedOutput = 'exemplo_de_snake_case';
    const result = camelToSnake(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('converte chaves de camelCase para snake_case recursivamente', () => {
    const inputObject = {
      exemploDeSnakeCase: {
        exemploDeSnakeCase: 'valor',
        exemploDeSnakeCase2: {
          exemploDeSnakeCase3: 'valor',
        },
      },
    };
    const expectedOutput = {
      exemplo_de_snake_case: {
        exemplo_de_snake_case: 'valor',
        exemplo_de_snake_case_2: {
          exemplo_de_snake_case_3: 'valor',
        },
      },
    };
    const result = camelToSnake(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('lança um erro ao tentar converter um valor inválido', () => {
    const invalidInput = null;
    expect(() => camelToSnake(invalidInput)).toThrow('Valor inválido!');
  });
});
