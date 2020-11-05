import { onError } from '@apollo/client/link/error';


export enum DataErrorsTypes {
  ConnectionError,
  GeneralError
}

export class DataError extends Error {
  constructor(message: string, public type: DataErrorsTypes) { super(message); }
}

export const HandleErrosLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) console.log(`graph`)

  if (networkError) console.log(networkError);
});
