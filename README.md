# Case Naming Converter

Solução simples e eficiente para a conversão de nomes ou propriedades de objetos de camelCase para snake_case e vice-versa. Isso é útil ao lidar com diferentes convenções de nomenclatura em projetos ou ao integrar sistemas que utilizam padrões de nomenclatura diferentes.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Clone o repositório e execute o seguinte comando no terminal para instalar as dependências:

```bash
npm i case-naming-converter
```

## Uso

O módulo `case-naming-converter` fornece duas funções principais: `camelToSnake` e `snakeToCamel`. Ambas as funções aceitam uma string ou object como entrada e retornam a string ou object convertido.

### Exemplo

```javascript
import {camelToSnake, snakeToCamel} from 'case-naming-converter';

const camelCaseString = 'exemploDeCamelCase';
const snakeCaseString = 'exemplo_de_snake_case';

const convertedToSnakeCaseString = camelToSnake(camelCaseString);
const convertedToCamelCaseString = snakeToCamel(snakeCaseString);

console.log('Camel to Snake Case:', convertedToSnakeCaseString);
console.log('Snake to Camel Case:', convertedToCamelCaseString);

const camelCaseObject = {exemploDeCamelCase: 'valor'};
const snakeCaseObject = {exemplo_de_snake_case: 'valor'};

const convertedToSnakeCaseObject = camelToSnake(camelCaseObject);
const convertedToCamelCaseObject = snakeToCamel(snakeCaseObject);

console.log('Camel to Snake Case:', convertedToSnakeCaseObject);
console.log('Snake to Camel Case:', convertedToCamelCaseObject);
```

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se encontrar problemas ou tiver sugestões de melhorias, abra uma issue ou envie um pull request. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md) - veja o arquivo LICENSE.md para detalhes.
