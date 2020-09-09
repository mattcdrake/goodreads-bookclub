import React from "react";

import { User } from "./types/User";
import { AuthContext } from "./contexts/authContext";

import ClubPage from "./components/ClubPage";
import Header from "./components/Header";

interface Props {}

interface State {
  user: User;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: {
        id: undefined,
        name: undefined,
      },
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.login();
  }

  login() {
    this.setState({ user: { id: 1, name: "James" } });
  }

  logout() {
    this.setState({ user: { id: undefined, name: undefined } });
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
        <ClubPage name="The First Bookclub" />
      </AuthContext.Provider>
    );
  }
}

export default App;
