import React from "react";

import { User } from "../types/User";

export interface IAuthContext {
  user?: User;
  login: () => void;
  logout: () => void;
}

const authDefault: IAuthContext = {
  user: undefined,
  login: () => {},
  logout: () => {},
};
const AuthContext = React.createContext(authDefault);

export { AuthContext };
