import { onError } from '@apollo/client/link/error';
import { showError } from '../common/utils/localNotifications';


export enum ErrorsTypes {
  ConnectionError,
  GeneralError
}

export class DataError<T> extends Error {
  constructor(message: string, public type: ErrorsTypes, public Data?: T) { super(message); }
}

export const HandleErrosLink = onError(({ graphQLErrors, networkError, forward }) => {
  if (graphQLErrors) showError("general error");
  if (networkError) showError("network error");
});
