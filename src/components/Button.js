import React from "react";
import get_token from "./Token";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      results: [],
      selectedOption: "None",
    };
  }

  handleClick() {
    let animal = localStorage.getItem("animal");
    let gender = localStorage.getItem("gender");
    let color = localStorage.getItem("color");
    let coat = localStorage.getItem("Coat");
    let zipcode = localStorage.getItem("zipcode");
    let distance = localStorage.getItem("distance");
    get_token()
      .then((response) => response.json())
      .then((key) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key["access_token"]}`,
        };
        fetch(
          `https://api.petfinder.com/v2/animals?type=${animal}&gender=${gender}&distance=${distance}&location=${zipcode}&coat=${coat}&color=${color}`,
          { headers }
        )
          .then((response) => response.json())
          .then((results) => {
            localStorage.setItem("results", results);
            console.log(results["animals"][0]);
          });
      });
  }

  render() {
    const results = localStorage.getItem("results");
    console.log(results["animals"]);

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
