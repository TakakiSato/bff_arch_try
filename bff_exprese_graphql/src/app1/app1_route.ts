import express = require('express');
var router = express.Router();

import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { queryType } from './schema/app1_table';

const schema: any = new GraphQLSchema({
  query: queryType
});

router.use(
  '/graphql',
  graphqlHTTP((_request) => {
    console.log('graphql Start Time:', Date.now())
    return {
      schema,
      graphiql: true
    };
  }),
);

module.exports = router;
