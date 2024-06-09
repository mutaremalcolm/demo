"use client"

import { createContext, useContext, useReducer, ReactNode } from 'react';

interface UserState {
  isAuthenticated: boolean;
  username: string | null;
}

type Action = 
  | { type: 'LOGIN', payload: { username: string } }
  | { type: 'LOGOUT' };

const initialState: UserState = {
  isAuthenticated: false,
  username: null,
};

const UserContext = createContext<{ state: UserState, dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
