import prettier from 'prettier';
import graphQLParser from 'prettier/parser-graphql';

export const stringToGraphQL = (input) => {
  if (input[0] === '"') {
    input = input.substring(1);
  }
  if (input[input.length-1] === '"') {
    input = input.substring(0, input.length-1);
  }
  input = input.replace(/\\/g, '');
  input = prettier.format(input, {
    parser: 'graphql',
    plugins: [graphQLParser]
  });
  return input;
};

export const graphQLToString = (input) => {
  input = input
    .replace(/"/g, '\\"')
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s\s/g, '');

  return `"${input}"`
};
