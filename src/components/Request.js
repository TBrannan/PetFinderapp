import React from "react";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      total: [],
    };
  }

  componentDidMount() {
    // for (const [index, element] of data.entries()) {
    //     console.log(element.package.name);
    //   }
    // GET request using fetch with set headers
    const headers = { "Content-Type": "application/json" };
    fetch("https://api.npms.io/v2/search?q=react", { headers })
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.results, total: data.total }));
  }

  render() {
    const total = this.state.total;
    const data = this.state.data;
    const names = [];
    for (const element of data) {
      names.push(element.package.name);
    }
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Set Headers</h5>
        <div className="card-body">total: {total}</div>
        <div className="card-body">names: {names.join(", ")}</div>
      </div>
    );
  }
}

export default PostList;
