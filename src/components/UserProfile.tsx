import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useAppDispatch } from "../app/hooks";
import { signOut } from "../redux/actions/authActions";

const UserProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(signOut());
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <span
        style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        {user?.photoURL && <img src={user.photoURL} alt="Profile" />}{" "}
      </span>
      <h2 style={{ fontWeight: "bold", color: "lightgreen", marginTop: "20px", textAlign: "center" }}>
        Welcome {user?.displayName}!
      </h2>
      <br />

      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>User Profile</h2>
      <br />

      <p><span style={{ fontWeight: "bold" }}>Email:</span> {user?.email}</p>

      <p><span style={{ fontWeight: "bold" }}>Display Name:</span>{" "}{user?.displayName}</p>

      <p><span style={{ fontWeight: "bold" }}>UID:</span> {user?.uid}</p>{" "}{/* Unique User ID (UID) */}

      <span style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </span>
    </div>
  );
};

export default UserProfile;
