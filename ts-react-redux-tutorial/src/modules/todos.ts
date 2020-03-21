import {
  createAction,
  ActionType,
  createReducer,
  action
} from "typesafe-actions";

const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

export const addTodo = createAction(ADD_TODO)<string>();

export const toggleTodo = createAction(TOGGLE_TODO)<number>();

export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

/* type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>; 
  */

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: "짱구", done: true },
  { id: 2, text: "도라에몽", done: true },
  { id: 3, text: "코난", done: false }
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
});

export default todos;
