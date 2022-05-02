//  REST APIの GET に相当する処理
// resolverにある処理まとめても良いのでは?
import { GraphQLList } from 'graphql';
import { getMemberList } from '@/fields/member/resolvers';
import { memberType } from '@/fields/member/types';

export const memberQuery = {
  memberList: {
    type: new GraphQLList(memberType),
    description: 'Get list of members data.',
    resolve: getMemberList
  }
};