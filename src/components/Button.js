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
    var gender = localStorage.getItem("gender");
    var animal = localStorage.getItem("animal");
    var color = localStorage.getItem("color");
    var coat = localStorage.getItem("coat");
    var zipcode = localStorage.getItem("zipcode");
    var distance = localStorage.getItem("distance");
    const token =  Token()
    token.then((token) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      if( distance === "None" || distance ==="undefined" ||zipcode === "None" || zipcode ==="undefined" ){
        return alert("Plese Select Distance and Zipcode")
      }
      if(gender ==="Any" || gender === "None" || gender ==="undefined"){
        gender = ''
      }
      if(color ==="Any" || color === "None"|| color ==="undefined"){
        color = ''
      }
      if(coat ==="Any" || coat === "None"|| coat ==="undefined"){
        coat = ''
      }
      if(distance ==="Any" || distance === "None"|| distance ==="undefined"){
        distance = ''
      }
      if(zipcode ==="Any" || zipcode === "None"|| zipcode ==="undefined"){
        zipcode = ''
      }
      if (animal ==="Bird"){
        localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}&gender=${gender}`)
    }else if (animal ==="Horse"){
      localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}&gender=${gender}`)
  }else if (animal ==="Small & Furry"){
    let animal = 'small-furry'
    localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}&gender=${gender}`)
}else if (animal ==="Scales, Fins & Other"){
  let animal = 'scales-fins-others'
  localStorage.setItem("URL",`https://api.petfinder.com/v2/animals?type=${animal}&distance=${distance}&location=${zipcode}&color=${color}&gender=${gender}`)
}else{
      localStorage.setItem("URL", `https://api.petfinder.com/v2/animals?type=${animal}&gender=${gender}&distance=${distance}&location=${zipcode}&coat=${coat}&color=${color}`)
    }
    fetch(localStorage.getItem("URL"),{headers}).then((ressponse) => ressponse.json()).then((results)=> {this.setState({results:results})})
      
      });
  }
}
export default Button;
