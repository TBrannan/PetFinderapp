import React from "react";

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


  render() {
  
    const options = JSON.parse(localStorage.getItem("color_map"))

    return (
      <>
        <select
          className="droptext"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          onClick={this.handleChange}
          storage={localStorage.setItem("color", this.state.selectedOption)}
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
