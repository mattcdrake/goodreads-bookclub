import React from "react";

import { User } from "../types/User";
import { IAuthContext, AuthContext } from "../contexts/authContext";

function Header() {
  const authContext: IAuthContext = React.useContext(AuthContext);
  return (
    <div className="flex justify-between text-white bg-gray-800">
      <span className="text-3xl m-2">Bookclub</span>
      {buildRightSide(authContext.user, authContext.login, authContext.logout)}
    </div>
  );
}

function buildRightSide(user: User, login: () => void, logout: () => void) {
  const sectionStyles = "p-4 space-x-8";
  const buttonStyles =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded";

  if (user.name) {
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
