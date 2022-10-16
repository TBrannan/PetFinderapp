import Animal from "./Animal";
import Color from "./Color";
import Gender from "./Gender";
import Coat from "./Coat";
import React from "react";
import Button from "./Button";
import get_token from "./Token";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      value: null,
    };
  }

  renderButton() {
    console.log("CLICK");
    let animal = localStorage.getItem("animal");
    let gender = localStorage.getItem("gender");
    let color = localStorage.getItem("color");
    let coat = localStorage.getItem("Coat");
    let zipcode = localStorage.getItem("zipcode");
    let distance = localStorage.getItem("distance");
    get_token()
      .then((response) => response.json())
      .then((key) => {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key["access_token"]}`,
        };
        fetch(
          `https://api.petfinder.com/v2/animals?type=${animal}&gender=${gender}&distance=${distance}&location=${zipcode}&coat=${coat}&color=${color}`,
          { headers }
        )
          .then((response) => response.json())
          .then((results) => {
            <Button value={results} />;
          });
      });
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
        <br />
        <div>
          <button onClick={() => this.renderButton()} Submit className="btn">
            submit
          </button>
        </div>
      </div>
    );
  }
}
export default Content;
