import React from "react";
import get_token from "./Token";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedOption: "None",
    };
  }

  handleClick() {
    console.log("CLICK");
  }

  componentDidMount() {
    get_token()
      .then((response) => response.json())
      .then((key) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key["access_token"]}`,
        };
        fetch("https://api.petfinder.com/v2/types", { headers })
          .then((response) => response.json())
          .then((data) => this.setState({ data: data }));
      });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} className="btn">
          Submit
        </button>
      </>
    );
  }
}

export default Button;
