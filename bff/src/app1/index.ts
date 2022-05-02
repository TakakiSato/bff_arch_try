import express = require('express');
var router = express.Router();

import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { queryType } from './schema/';

const schema: any = new GraphQLSchema({
  query: queryType
});

router.use(
  '/graphql',
  express.json(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

module.exports = router;
