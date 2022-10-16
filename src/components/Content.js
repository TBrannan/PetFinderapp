import Animal from "./Animal";
import Color from "./Color";
import Gender from "./Gender";
import Coat from "./Coat";
import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  ChangeHandle = ({ target }) => {
    this.setState({
      zipcode: target.value,
    });
  };

  DistanceHandle = ({ target }) => {
    this.setState({
      distance: target.value,
    });
  };

  render() {
    return (
      <div className="Animal">
        <br />
        <div className="box1">
          <label className="droptitle">Animal</label>
          <Animal />
        </div>
        <br />
        <div className="box2">
          <label className="droptitle">Gender</label>
          <Gender />
        </div>
        <br />
        <div className="box3">
          <label className="droptitle">Colors</label>
          <Color />
        </div>
        <br />
        <div className="box3">
          <label className="droptitle">Coats</label>
          <Coat />
        </div>
        <br />
        <div className="box5">
          <label className="droptitle">Zicode</label>
          <input
            className="droptitle"
            type="text"
            name="zipcode"
            onChange={this.ChangeHandle}
            zip={localStorage.setItem("zipcode", this.state.zipcode)}
          ></input>
        </div>
        <br />
        <div className="box6">
          <label className="droptitle">Distance (Miles)</label>
          <input
            className="droptitle"
            type="text"
            name="distance"
            onChange={this.DistanceHandle}
            dist={localStorage.setItem("distance", this.state.distance)}
          ></input>
          <br />
        </div>
      </div>
    );
  }
}
export default Content;
