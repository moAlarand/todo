import {gql} from '@apollo/client';
import {TODO} from '../fragments';
export const GET_ALL_TODOS = gql`
  query GetAllTodos($after: String) {
    todos(after: $after) {
      edges {
        node {
          ...Todo
        }
      }
    }
  }
  ${TODO}
`;
