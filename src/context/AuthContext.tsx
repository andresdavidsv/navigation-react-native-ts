import React, { createContext, useReducer } from 'react';
import { authReducer as reducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteicon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteicon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (name: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatch] = useReducer(reducer, authInitialState);
  const signIn = () => {
    dispatch({ type: 'signIn' });
  };
  const signOut = () => {
    dispatch({ type: 'signOut', payload: authInitialState });
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };
  const changeUsername = (name: string) => {
    dispatch({ type: 'changeUsername', payload: name });
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        signOut,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
