import { onError } from '@apollo/client/link/error';

export const HandleErrosLink = onError(({ graphQLErrors, networkError, forward }) => {
  if (graphQLErrors) console.log(`graph`)

  if (networkError) console.log(networkError);
});
