//データの更新をする時

import { GraphQLNonNull, GraphQLList } from 'graphql';
import { createAuthor } from './resolvers';
import { authorType, authorCreateInput } from './types';

export const authorMutation = {
  createAuthor: {
    type: new GraphQLList(authorType),
    args: {
      author: {
        type: new GraphQLNonNull(authorCreateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return createAuthor(args.author);
    }
  }
};