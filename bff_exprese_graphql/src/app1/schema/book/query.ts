//  REST APIの GET に相当する処理
// resolverにある処理まとめても良いのでは?
import { GraphQLList } from 'graphql';
import { getBookList } from './resolvers';
import { bookType } from './types';

export const bookQuery = {
  bookList: {
    type: new GraphQLList(bookType),
    description: 'Get list of books data.',
    resolve: getBookList
  }
};