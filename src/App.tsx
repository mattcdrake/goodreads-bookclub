import React from "react";

import { User } from "./types/User";
import { AuthContext } from "./contexts/authContext";

import { ClubPage } from "./components/ClubPage";
import { Header } from "./components/Header";

import { spoofUser } from "./helpers/spoofUser";

interface Props {}

interface State {
  user?: User;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.login();
  }

  login() {
    this.setState({ user: spoofUser() });
  }

  logout() {
    this.setState({ user: undefined });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          login: this.login,
          logout: this.logout,
        }}
      >
        <Header />
        <ClubPage id={1} />
      </AuthContext.Provider>
    );
  }
}

export default App;
