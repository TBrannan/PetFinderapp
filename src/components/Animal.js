import React from "react";
import get_token from "./Token";
import get_animal from "./Handlers";

class Animal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedOption: "None",
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      selectedOption: target.value,
    });
    console.log("CaLLED");
    get_animal().then((response) => console.log(response));
  };

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
    const something = this.state.data;
    const myMap = new Map();

    console.log(localStorage.getItem("animal"));

    for (var k in something) {
      var length = something[k].length;
      for (var i = 0; i < length; i++) {
        myMap.set(null, null);
        myMap.set(something[k][i]["name"], something[k][i]["name"]);
      }
    }

    const options = [...myMap].map(([name, label]) => ({ name, label }));

    return (
      <>
        {/* <span>{this.state.selectedOption}</span> */}
        <select
          className="droptext"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          storage={localStorage.setItem("animal", this.state.selectedOption)}
        >
          {options.map(({ value, label }, index) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Animal;
