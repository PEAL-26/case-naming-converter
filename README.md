# Case Naming Converter

Este projeto Node.js visa fornecer uma solução simples e eficiente para a conversão de nomes ou propriedades de objetos entre camelCase e snake_case. Isso é útil ao lidar com diferentes convenções de nomenclatura em projetos ou ao integrar sistemas que utilizam padrões de nomenclatura diferentes.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Clone o repositório e execute o seguinte comando no terminal para instalar as dependências:

```bash
npm install
```

## Uso

O módulo `case-naming-converter` fornece duas funções principais: `camelToSnake` e `snakeToCamel`. Ambas as funções aceitam uma string como entrada e retornam a string convertida.

### Exemplo

```javascript
const caseNamingConverter = require('./case-naming-converter');

const camelCaseString = 'exemploDeCamelCase';
const snakeCaseString = 'exemplo_de_snake_case';

const convertedToSnakeCase = caseNamingConverter.camelToSnake(camelCaseString);
const convertedToCamelCase = caseNamingConverter.snakeToCamel(snakeCaseString);

console.log('Camel to Snake Case:', convertedToSnakeCase);
console.log('Snake to Camel Case:', convertedToCamelCase);
```

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se encontrar problemas ou tiver sugestões de melhorias, abra uma issue ou envie um pull request. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md) - veja o arquivo LICENSE.md para detalhes.
