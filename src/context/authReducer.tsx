import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'signOut'; payload: AuthState }
  | { type: 'changeUsername'; payload: string }
  | { type: 'changeFavIcon'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username',
      };
    case 'signOut':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        username: action.payload.username,
        favoriteicon: action.payload.favoriteicon,
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteicon: action.payload,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
