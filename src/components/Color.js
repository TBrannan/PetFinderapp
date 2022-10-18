import React from "react";
import get_token from "./Token";

class Color extends React.Component {
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

    function get_color(number) {
      console.log("Got Numer " + number);
      if (number === "None") {
        myMap.set("Something", "Select Animal");
        myMap.set("Something2", "Select Animal");
      } else {
        for (var k in something) {
          var size = Object.keys(something[k][number]["colors"]).length;
          for (var i = 0; i < size; i++) {
            myMap.set(
              something[k][number]["colors"][i],
              something[k][number]["colors"][i]
            );
          }
        }
      }
    }

    function animal_color() {
      console.log("Animal called");
      if (localStorage.getItem("animal") === "Dog") {
        get_color(0);
      } else if (localStorage.getItem("animal") === "Cat") {
        get_color(1);
      } else if (localStorage.getItem("animal") === "Rabbit") {
        get_color(3);
      } else if (localStorage.getItem("animal") === "Small & Furry") {
        get_color(3);
      } else if (localStorage.getItem("animal") === "Horse") {
        get_color(4);
      } else if (localStorage.getItem("animal") === "Bird") {
        get_color(5);
      } else if (localStorage.getItem("animal") === "Scales, Fins & Other") {
        get_color(6);
      } else if (localStorage.getItem("animal") === "Barnyard") {
        get_color(7);
      } else {
        get_color("None");
      }
    }

    animal_color();

    const options = [...myMap].map(([name, label]) => ({ name, label }));

    return (
      <>
        <select
          className="droptext"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          storage={localStorage.setItem("Color", this.state.selectedOption)}
        >
          {options.map(({ value, label }, index) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Color;
