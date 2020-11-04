
import { Screen } from '../navigation'
import { Home } from './home/Home';
import { AddTODo } from './addTodo/AddToDo';

export const screens: Screen[] = [
  { name: 'home', component: Home },
  { name: 'addToDo', component: AddTODo },

];

