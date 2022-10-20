import React from "react";
import get_token from "../App.js";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], text: "" };
    this.get_results = this.get_results.bind(this);
  }

  render() {
    const results = this.state.results;
    const myMap = new Map();

    for (var k in results) {
      var length = results[k].length;
      for (var i = 0; i < length; i++) {
        myMap.set({
          animals: results["animals"][i],
        });
      }
    }

    const options = [...myMap].map(([values]) => ({ values }));

    return (
      <div>
        <input
          className="btn"
          type="submit"
          value="Search"
          onClick={this.get_results}
        />
        <div>
          {options.map((animal, index) => (
            <>
              <a href={animal.values.animals.url}>
                {animal.values.animals.name}
                <br></br>
              </a>
              <img
                width="400"
                height="400"
                src={animal.values.animals.photos[0]["large"]}
                alt={animal.values.animals.name}
              ></img>
              <br></br>
              Breed: {animal.values.animals.breeds.primary}
              <br></br>
              Age: {animal.values.animals.age}
              <br></br>
              Location: {animal.values.animals.contact.address.city},
              {animal.values.animals.contact.address.state}
              <br></br>
              Description:
              <br></br>
              {animal.values.animals.description}
              <hr
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 5,
                }}
              />
            </>
          ))}
        </div>
      </div>
    );
  }

  get_results() {
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
            this.setState({ results: results });
          });
      });
  }
}
export default Button;
