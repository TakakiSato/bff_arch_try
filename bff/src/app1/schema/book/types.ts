//typesに型定義を記載する。

import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

export const bookType = new GraphQLObjectType({
  name: 'book',
  description: 'book',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The book ID.'
    },
    author_id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The author ID.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The book name.'
    },
  }
});
