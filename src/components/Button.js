import React from "react";

class Button extends React.Component {
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
    console.log("HERE");
    console.log(this.props.value);
    return (
      <>
        HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
        {this.props.value}
      </>
    );
  }
}

export default Button;
