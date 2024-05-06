import React from "react";
import "firebase/auth";
import { signInWithGoogle } from "../redux/actions/authActions";
import GoogleButton from "react-google-button";
import { useAppDispatch } from "../app/hooks";

const GoogleSignInButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const HandleLogin = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <GoogleButton
        onClick={HandleLogin}
      />
    </div>
  );
};

export default GoogleSignInButton;
