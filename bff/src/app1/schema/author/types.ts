//typesに型定義を記載する。

import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

export const authorType = new GraphQLObjectType({
  name: 'author',
  description: 'author',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The author ID.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The author name.'
    },
  }
});
