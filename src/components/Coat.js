import React from "react";
import get_token from "./Token";

class Coat extends React.Component {
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
    const myMap = new Map();

    function get_color(number) {
      if (number === "None") {
        myMap.set("Something", "No Coat Options");
        myMap.set("Something2", "No Coat Options");
      } else {
        for (var k in something) {
          var size = Object.keys(something[k][number]["coats"]).length;
          for (var i = 0; i < size; i++) {
            myMap.set(
              something[k][number]["coats"][i],
              something[k][number]["coats"][i]
            );
          }
        }
      }
    }

    if (localStorage.getItem("animal") === "Dog") {
      get_color(0);
    } else if (localStorage.getItem("animal") === "Cat") {
      get_color(1);
    } else if (localStorage.getItem("animal") === "Rabbit") {
      get_color(3);
    } else if (localStorage.getItem("animal") === "Small & Furry") {
      get_color(3);
    } else if (localStorage.getItem("animal") === "Horse") {
      get_color("None");
    } else if (localStorage.getItem("animal") === "Bird") {
      get_color(5);
    } else if (localStorage.getItem("animal") === "Scales, Fins & Other") {
      get_color(6);
    } else if (localStorage.getItem("animal") === "Barnyard") {
      get_color(7);
    } else {
      get_color("None");
    }

    const options = [...myMap].map(([name, label]) => ({ name, label }));

    return (
      <>
        {/* <span>{this.state.selectedOption}</span> */}
        <select
          className="droptext"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          storage={localStorage.setItem("Coat", this.state.selectedOption)}
        >
          {options.map(({ value, label }, index) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Coat;
