import * as React from "react";

export class RegisterView extends React.PureComponent {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { password, email } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log("test");
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
