
const color_handler = async (animal) =>{
  console.log("FOUND " + animal)
    if (animal === "Dog") {
        console.log("GET DOGGIE")
        return get_color(0);
    } else if (animal === "Cat") {
      return get_color(1);
    } else if (animal === "Rabbit") {
      return get_color(3);
    } else if (animal === "Small & Furry") {
      return get_color(3);
    } else if (animal === "Horse") {
      return get_color(4);
    } else if (animal === "Bird") {
      return get_color(5);
    } else if (animal === "Scales, Fins & Other") {
      return get_color(6);
    } else if (animal === "Barnyard") {
      return get_color(7);
    } else {
      return  get_color("None");
    }

}

const get_color = async (number)=>{
    const myMap = new Map()
    const something = JSON.parse(localStorage.getItem("data"))
    console.log("Got Number " + number);
      if (number === "None") {
        myMap.set("Something", "Select Animal");
        myMap.set("Something2", "Select Animal");
      } else {
        for (var k in something) {
          var size = Object.keys(something[k][number]["colors"]).length;
          for (var i = 0; i < size; i++) {
            myMap.set(
              something[k][number]["colors"][i],
              something[k][number]["colors"][i]
            );
          }
        }
      }
      return myMap

}


  export default color_handler