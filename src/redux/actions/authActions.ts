import { User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Dispatch } from 'redux';
import { auth } from './firebase';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

export const signInSuccess = (user: User | null) => ({
  type: SIGN_IN_SUCCESS,
  payload: user ? {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
  } : null,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signInWithGoogle = () => async (dispatch: Dispatch) => {
    const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(signInSuccess(result.user!));
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

export const signOut = () => async (dispatch: Dispatch) => {
  try {
    dispatch(signInSuccess(null));
    await auth.signOut();
    dispatch(signOutSuccess());
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
