import React from "react";
import Login from "./pages/login/login";
export function requireAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = localStorage.getItem("token") ? true : false;
    }

    render() {
      const loginErrorMessage = <Login />;

      return (
        <div>
          {this.state === true ? (
            <Component {...this.props} />
          ) : (
            loginErrorMessage
          )}
        </div>
      );
    }
  };
}

export default requireAuthentication;
