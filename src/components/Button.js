import React from "react";
import get_token from "./Token";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], text: "" };
    this.get_results = this.get_results.bind(this);
  }

  render() {
    const results = this.state.results;
    const myMap = new Map();

    for (var k in results) {
      var length = results[k].length;
      for (var i = 0; i < length; i++) {
        myMap.set(results["animals"][i]["name"], results["animals"][i]["url"]);
      }
    }

    const options = [...myMap].map(([name, url]) => ({ name, url }));
    console.log(options);
    return (
      <div>
        <button className="btn" onClick={this.get_results}>
          Submit
        </button>
        <div className="main2">
          {options.map(({ name, url }, index) => (
            <>
              <a href={url}>{name}</a>
            </>
          ))}
        </div>
      </div>
    );
  }

  get_results() {
    console.log("CLICK");
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
            this.setState({ results: results });
          });
      });
  }
}
export default Button;
