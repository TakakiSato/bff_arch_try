import { GraphQLObjectType } from 'graphql';
import { authorField } from './author';

export const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type.',
  fields: {
    ...authorField.query
  }
});
