import React from "react";

class PostList extends React.Component {
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
    const headers = { "Content-Type": "application/json" };
    fetch("https://api.npms.io/v2/search?q=react", { headers })
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.results }));
  }

  render() {
    const something = this.state.data;
    const myMap = new Map();

    for (const [key, value] of Object.entries(something)) {
      myMap.set(key, value.package.name);
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

export default PostList;
