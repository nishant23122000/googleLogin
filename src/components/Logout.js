import React from "react";
import { GoogleLogout } from "react-google-login";



export default function Logout(props) {

  const { setUser, setClasses, setAuth, user, clientId } = props;

  const logout = () => {
    localStorage.setItem("user", null);
    setUser({});
    setClasses([]);
    setAuth(false);

  };
  const handleLogoutFailure = response => {
    alert("Failed to log out");
  };


  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        icon={false}
        buttonText="Login"
        onLogoutSuccess={logout}
        onFailure={handleLogoutFailure}
        render={renderProps => (
          <a href="/" style={{ padding: "5px 20px", border: "1px solid black", textDecoration: "none", fontSize: "20px", color: "black" }} onClick={renderProps.onClick}>
            Sign out
          </a>
        )}
      />
    </div>
  );
}
