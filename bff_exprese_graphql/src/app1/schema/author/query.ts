//  REST APIの GET に相当する処理
// resolverにある処理まとめても良いのでは?
import { GraphQLList } from 'graphql';
import { getAuthorList } from './resolvers';
import { authorType } from './types';

export const authorQuery = {
  authorList: {
    type: new GraphQLList(authorType),
    description: 'Get list of authors data.',
    resolve: getAuthorList
  }
};