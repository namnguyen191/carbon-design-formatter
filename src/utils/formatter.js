import prettier from 'prettier';
import graphQLParser from 'prettier/parser-graphql';

export const stringToGraphQL = (input) => {
  input = input.replace(/\//g, '');
  input = prettier.format(input, {
    parser: 'graphql',
    plugins: [graphQLParser]
  });
  return input;
};

export const graphQLToString = (input) => {
  return input
    .replace(/"/g, '/"')
    .replace(/\r?\n|\r/g, '')
    .replace(/\s\s/g, '');
};
