import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { cache } from './cache';
import { HandleErrosLink } from './errors';
const httpLink = new HttpLink({
  uri: 'http://10.1.11.4:4000/'
})

export const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([HandleErrosLink, httpLink]),
  // headers: {
  //   // authorization: localStorage.getItem('token') || '',
  //   // 'client-name': 'ac3-todos-backend',
  //   // 'client-version': '1.0.0',
  // },
  connectToDevTools: true,
  queryDeduplication: true
});