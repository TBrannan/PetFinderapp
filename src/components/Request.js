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
    // GET request using fetch with set headers
    const headers = { "Content-Type": "application/json" };
    fetch("https://api.npms.io/v2/search?q=react", { headers })
      .then((response) => response.json())
      .then((data) =>
        this.setState({ data: data.results[0].package, total: data.total })
      );
  }

  render() {
    const total = this.state.total;
    const data = this.state.data;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Set Headers</h5>
        <div className="card-body">total: {total}</div>
        <div className="card-body">data: {data.name}</div>
      </div>
    );
  }
}

export default PostList;
