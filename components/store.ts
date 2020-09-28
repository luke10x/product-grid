import { createStore } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

type UserAction = { type: 'LOGIN'; userId: string } | { type: 'LOGOUT' };

export interface State {
  loggedInUserId?: string;
}

const initialState: State = {
  loggedInUserId: undefined,
};

const reducer = (state: State = initialState, action: UserAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedInUserId: action.userId };
    case 'LOGOUT':
      return { ...state, loggedInUserId: undefined };

    default:
      return state;
  }
};

const makeStore: MakeStore<State> = (context: Context) => createStore(reducer);
export const wrapper = createWrapper<State>(makeStore, { debug: true });
