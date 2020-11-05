import {gql} from '@apollo/client';
import {TODO} from '../fragments';
export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      success
      todo {
        ...Todo
      }
      error {
        message
      }
    }
  }
  ${TODO}
`;
