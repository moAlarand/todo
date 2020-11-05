import { onError } from '@apollo/client/link/error';


export enum ErrorsTypes {
  ConnectionError,
  GeneralError
}

export class DataError<T> extends Error {
  constructor(message: string, public type: ErrorsTypes, public Data: T) { super(message); }
}

export const HandleErrosLink = onError(({ graphQLErrors, networkError, forward }) => {
  if (graphQLErrors) console.log(`graph`)
  if (networkError) console.log(networkError);
});
