import React from "react";
import Token from "./Token";
import Handler from "./Handler"

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
    console.log("HERE poopy")
    const ColorMapper = Handler.color_handler(target.value)
    ColorMapper.then((myMap)=> { const options = [...myMap].map(([name, label]) => ({ name, label })); localStorage.setItem("color_map",JSON.stringify(options))})
    const CoatMapper = Handler.coat_handler(target.value)
    CoatMapper.then((myMap)=> { const options = [...myMap].map(([name, label]) => ({ name, label })); localStorage.setItem("coat_map",JSON.stringify(options))})
  };

  
  componentDidMount() {
    const token =  Token()
    token.then((token) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch("https://api.petfinder.com/v2/types", { headers })
              .then((response) => response.json())
              .then((data) => localStorage.setItem("data",JSON.stringify(data)));
          });
      }


  render() {
    const something = JSON.parse(localStorage.getItem("data"))
    const myMap = new Map();

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
