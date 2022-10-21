import React from "react";
import get_token from "../App.js";

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



  render() {
    const something = JSON.parse(localStorage.getItem("data"))
    console.log(something)
    const myMap = new Map();

    for (var k in something) {
      myMap.set("Any", "Any");
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
