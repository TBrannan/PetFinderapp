import React from "react";

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

    

    const set_options = localStorage.getItem("coat_map")
    if (set_options == null){
      const json = [{"name":"Black","label":"Select Coat"}]
      localStorage.setItem("coat_map",JSON.stringify(json))
    }
    const options = JSON.parse(localStorage.getItem("coat_map"))


    return (
      <>
        {/* <span>{this.state.selectedOption}</span> */}
        <select
          className="droptext"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          onClick={this.handleChange}
          storage={localStorage.setItem("coat", this.state.selectedOption)}
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
