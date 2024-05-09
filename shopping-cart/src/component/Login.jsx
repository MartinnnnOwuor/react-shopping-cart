import React, { Component } from "react";

class Login extends Component {
  state = { email: "", password: "", message: "" };
  render() {
    return (
      <div className="col-lg-9 m-3 p-2">
        <h4 className="border-bottom">Log-in</h4>

        {/* Beginning of the Email */}
        <div className="form-group form row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* End of Email */}

        {/* Beginning of the Password */}
        <div className="form-group form row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* End of Password */}

        <div className="d-flex justify-content-end">
          <span className="m-3 ">{this.state.message}</span>

          <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }

  //Fires when user clicks on Login button
  onLoginClick = async () => {
    console.log(this.state);

    let response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    let body = await response.json();
    console.log (body);

    if (body.length > 0) {
      //if success
      this.setState({
        message: <span className="text-success">Login successful</span>,
      });
    } else {
      //if  error
      this.setState({
        message: (
          <span className="text-danger">
            Login Unsuccessful, please try again
          </span>
        ),
      });
    }
  };
}

export default Login;