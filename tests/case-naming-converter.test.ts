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

  test('Retorna null', () => {
    expect(snakeToCamel(null)).toBeNull();
  });

  test('Retorna undefined', () => {
    expect(snakeToCamel(undefined)).toBeUndefined();
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

  test('converte array de camelCase com Date para snake_case', () => {
    const date = new Date();
    const inputArray = [{ ExampleArrayObject: date }];
    const expectedOutput = [{ example_array_object: date }];
    const result = camelToSnake(inputArray);
    expect(result).toEqual(expectedOutput);
  });

  test('converte array de camelCase para snake_case', () => {
    const inputArray = [{ ExampleArrayObject: 'valor qualquer' }];
    const expectedOutput = [{ example_array_object: 'valor qualquer' }];
    const result = camelToSnake(inputArray);
    expect(result).toEqual(expectedOutput);
  });

  test('converte objeto de snake_case para camelCase recursivamente', () => {
    const date = new Date();
    const inputObject = {
      Example_Array_Object: [{ arrayConvert: date }],
    };
    const expectedOutput = {
      exampleArrayObject: [{ arrayConvert: date }],
    };
    const result = snakeToCamel(inputObject);
    expect(result).toEqual(expectedOutput);
  });

  test('retorna um objeto vazio ao tentar converter um number', () => {
    const invalidInput = 123; // Não é uma string
    expect(snakeToCamel(invalidInput)).toEqual({});
  });

  test('Retorna null', () => {
    expect(camelToSnake(null)).toBeNull();
  });

  test('Retorna undefined', () => {
    expect(camelToSnake(undefined)).toBeUndefined();
  });
});
