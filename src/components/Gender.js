import React from "react";
import get_token from "./Token";

class Gender extends React.Component {
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

    for (var k in something) {
      myMap.set("Male", something["types"][1]["genders"][0]);
      myMap.set("Female", something["types"][1]["genders"][1]);
    }

    const options = [...myMap].map(([name, label]) => ({ name, label }));

    return (
      <>
        {/* <span>{this.state.selectedOption}</span> */}
        <select
          className="droptext"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          storage={localStorage.setItem("gender", this.state.selectedOption)}
        >
          {options.map(({ value, label }, index) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Gender;
