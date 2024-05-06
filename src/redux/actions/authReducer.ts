import { User } from 'firebase/auth';
import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/authActions';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
