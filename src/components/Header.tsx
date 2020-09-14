import React from "react";

import { User } from "../types/User";
import { IAuthContext, AuthContext } from "../contexts/authContext";

function Header() {
  const authContext: IAuthContext = React.useContext(AuthContext);
  return (
    <div className="text-white bg-gray-800">
      <div className="flex container justify-between m-auto">
        <span className="text-3xl m-2">Bookclub</span>
        {buildRightSide(
          authContext.login,
          authContext.logout,
          authContext.user
        )}
      </div>
    </div>
  );
}

function buildRightSide(login: () => void, logout: () => void, user?: User) {
  const sectionStyles = "p-4 space-x-8";
  const buttonStyles =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded";

  if (user) {
    return (
      <span className={sectionStyles}>
        <span>Hello, {user.name}!</span>
        <button className={buttonStyles} onClick={logout}>
          Sign out
        </button>
      </span>
    );
  }
  return (
    <span className={sectionStyles}>
      <button className={buttonStyles} onClick={login}>
        Sign in!
      </button>
    </span>
  );
}

export { Header };
