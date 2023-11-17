import { camelCase, snakeCase } from 'case-anything';

const validateObject = <T>(obj: T) => {
  // verifica se obj é um objeto
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Objeto inválido!');
  }
};

export const snakeToCamel = <T>(obj: any) => {
  validateObject(obj);

  const convertedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = camelCase(key);
    convertedObject[newKey] = value;
  }

  return convertedObject as T;
};

export const camelToSnake = (obj: any) => {
  validateObject(obj);

  const convertedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = snakeCase(key);
    convertedObject[newKey] = value;
  }

  return convertedObject;
};
