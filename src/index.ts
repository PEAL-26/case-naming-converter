import { camelCase, snakeCase } from 'case-anything';

export const verifyInputType = (input: any) => {
  if (input === undefined || input === null) {
    throw new Error('Valor inválido!');
  }

  if (typeof input === 'string') {
    return 'string';
  }

  if (typeof input === 'object') {
    return 'object';
  }

  return false;
};

export const snakeToCamel = <T>(input: any) => {
  const type = verifyInputType(input);

  if (type === 'string') return camelCase(input);

  const convertedObject = {};
  for (const [key, value] of Object.entries(input)) {
    const valueType = verifyInputType(value);

    if (valueType === 'object') {
      convertedObject[camelCase(key)] = snakeToCamel(value);
    } else {
      convertedObject[camelCase(key)] = value;
    }
  }

  return convertedObject as T;
};

export const camelToSnake = (input: any) => {
  const type = verifyInputType(input);

  if (type === 'string') return snakeCase(input);

  const convertedObject = {};

  for (const [key, value] of Object.entries(input)) {
    const valueType = verifyInputType(value);

    if (valueType === 'object') {
      convertedObject[snakeCase(key)] = camelToSnake(value);
    } else {
      convertedObject[snakeCase(key)] = value;
    }
  }

  return convertedObject;
};
