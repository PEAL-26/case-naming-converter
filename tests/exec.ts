import { camelToSnake, snakeToCamel, checkDataType } from '../src/index';

console.clear();

console.log(checkDataType([]));
console.log(checkDataType([]));
console.log(checkDataType({}));
console.log(camelToSnake('stringExample'));
console.log(camelToSnake({})); // Empty Object
console.log(camelToSnake([])); // Empty Array
console.log(camelToSnake(null)); // Value Null
console.log(camelToSnake(undefined)); // Value undefined
console.log(snakeToCamel(null)); // Value Null
console.log(snakeToCamel(undefined)); // Value undefined
console.log(camelToSnake([{ ExampleArrayObject: 'valor qualquer' }]));
console.log(camelToSnake([{ ExampleArrayObject: new Date() }]));
console.log(camelToSnake({ ExampleArrayObject: [new Date(), new Date()] }));
console.log(snakeToCamel({ Example_Array_Object: [new Date(), new Date()] }));
console.log(camelToSnake({ ExampleArrayObject: [{ arrayConvert: new Date() }] }));

console.log('String Type', snakeToCamel({ exemplo_de_snake_case: 'valor' }));
// Saída esperada: { exemploDeSnakeCase: 'valor' }

console.log('String Type', camelToSnake({ exemploDeSnakeCase: 'valor' }));
// Saída esperada: { exemplo_de_snake_case: 'valor' }

console.log('Date Type', camelToSnake({ exemploDeSnakeCase: new Date() }));
// Saída esperada: { exemplo_de_snake_case: 'valor' }

console.log(
  'Array Type',
  camelToSnake({
    exemploDeSnakeCase: [{ exempleArray: 'value', exampleArray2: new Date() }],
  }),
);
// Saída esperada: { exemplo_de_snake_case: [{ exemple_array: 'value', example_array2: '2023-12-10T00:00:00.000Z' }] }

console.log(
  'Array Type',
  camelToSnake({
    exemploDeSnakeCase: [{ exempleArray: 'value', exampleArray2: new Date() }],
  }),
);

// Exemplo com number
console.log('Number Type', camelToSnake({ exemploDeSnakeCase: 42 }));
// Saída esperada: { exemplo_de_snake_case: 42 }

// Exemplo com boolean
console.log('Boolean Type', camelToSnake({ exemploDeSnakeCase: true }));
// Saída esperada: { exemplo_de_snake_case: true }

// Exemplo com objeto aninhado
console.log(
  'Object Type',
  camelToSnake({
    exemploDeSnakeCase: { nestedProperty: 'value' },
  }),
);
// Saída esperada: { exemplo_de_snake_case: { nested_property: 'value' } }
