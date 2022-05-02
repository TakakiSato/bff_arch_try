//typesに型定義を記載する。

import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLInputObjectType} from 'graphql';

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

export const authorCreateInput = new GraphQLInputObjectType({
  name: 'authorCreateInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The author name.'
    },
  }
});