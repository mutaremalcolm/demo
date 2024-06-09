"use client"

// UserContext.tsx
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
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('authState');
      }
      return initialState;
    default:
      return state;
  }
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  let storedState = initialState;
  if (typeof localStorage !== 'undefined') {
    storedState = JSON.parse(localStorage.getItem('authState') || '{}');
  }
  const [state, dispatch] = useReducer(reducer, storedState);

  const dispatchWithStorage = (action: Action) => {
    const newState = reducer(state, action);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('authState', JSON.stringify(newState));
    }
    dispatch(action);
  };

  return (
    <UserContext.Provider value={{ state, dispatch: dispatchWithStorage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
