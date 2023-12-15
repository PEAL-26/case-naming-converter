import { camelCase, snakeCase } from 'case-anything';

export const checkDataType = (input: any) => {
  if (input === undefined || input === null) {
    throw new Error('CaseNamingConverterError: Valor inválido!', {
      cause: input,
    });
  }

  if (Array.isArray(input)) return 'array';
  if (input instanceof Date) return 'date';

  return typeof input;
};

export const snakeToCamel = <T>(input: any) => {
  const type = checkDataType(input);

  if (type === 'string') return camelCase(input) as T;

  if (type === 'array') {
    return converterArray<T>(input, 'camel') as T;
  }

  return converter<T>(input, 'camel') as T;
};

export const camelToSnake = <T>(input: any) => {
  const type = checkDataType(input);

  if (type === 'string') return snakeCase(input) as T;

  if (type === 'array') {
    return converterArray<T>(input, 'snake') as T;
  }

  return converter<T>(input, 'snake') as T;
};

function converterArray<T>(input: any, toConvert: 'camel' | 'snake') {
  return input.map((item: any) => {
    const type = checkDataType(item);
    if (type === 'date') return item;
    if (type !== 'object') return item;

    return converter<T>(item, toConvert);
  });
}

function converter<T>(input: any, toConvert: 'camel' | 'snake') {
  let convertedObject = {};

  for (const [key, value] of Object.entries(input)) {
    if (value === undefined) continue;
    const valueType = value !== null && checkDataType(value);

    if (valueType === 'object' || valueType === 'array') {
      toConvert === 'snake'
        ? (convertedObject[snakeCase(key)] = camelToSnake(value))
        : (convertedObject[camelCase(key)] = snakeToCamel(value));
    } else {
      toConvert === 'snake'
        ? (convertedObject[snakeCase(key)] = value)
        : (convertedObject[camelCase(key)] = value);
    }
  }

  return convertedObject as T;
}
