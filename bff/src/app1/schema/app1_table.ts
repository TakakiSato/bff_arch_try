import { GraphQLObjectType } from 'graphql';
import { authorField } from './author';
import { bookField } from './book';

export const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type.',
  fields: {
    ...authorField.query,
    ...bookField.query
  }
});
