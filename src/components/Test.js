import React from "react";
import get_token from "./Token";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedOption: "None",
      value: "Something",
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      selectedOption: target.value,
    });
  };

  componentDidMount() {
    get_token()
      .then((response) => response.json())
      .then((key) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key["access_token"]}`,
        };
        fetch(
          "https://api.petfinder.com/v2/animals?type=dog&distance=10&location=33619",
          { headers }
        )
          .then((response) => response.json())
          .then((data) => this.setState({ data: data }));
      });
  }

  render() {
    const something = this.state.data;
    const myMap = new Map();

    const textFromStorage = localStorage.getItem("animal");
    console.log(textFromStorage);

    for (var k in something) {
      var length = something[k].length;
      for (var i = 0; i < length; i++) {
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
        >
          {options.map(({ value, label }, index) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Test;
