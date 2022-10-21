import React from "react";
import Token from "./Token";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], text: "",URL:"" };
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
    let coat = localStorage.getItem("coat");
    let zipcode = localStorage.getItem("zipcode");
    let distance = localStorage.getItem("distance");
    const token =  Token()
    token.then((token) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    if (gender ==="Any"){
      localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&coat=${coat}&color=${color}`)
    }
      else if (animal ==="Bird"){
        localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}`)
    }else if (animal ==="Horse"){
      localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}`)
  }else if (animal ==="Small & Furry"){
    let animal = 'small-furry'
    localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}`)
}else if (animal ==="Scales, Fins & Other"){
  let animal = 'scales-fins-others'
  localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}`)
}else{
      localStorage.setItem("URL", `https://api.petfinder.com/v2/animals?type=${animal}&gender=${gender}&distance=${distance}&location=${zipcode}&coat=${coat}&color=${color}`)
    }
    fetch(localStorage.getItem("URL"),{headers}).then((ressponse) => ressponse.json()).then((results)=> {this.setState({results:results})})
      
      });
  }
}
export default Button;
