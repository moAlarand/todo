import { ApolloClient } from "@apollo/client";
import { cache } from './cache';

export const apolloClient = new ApolloClient({
  cache,
  uri: 'http://10.1.11.4:4000/',
  // headers: {
  //   // authorization: localStorage.getItem('token') || '',
  //   // 'client-name': 'ac3-todos-backend',
  //   // 'client-version': '1.0.0',
  // },
  connectToDevTools: true,
  queryDeduplication: true
});