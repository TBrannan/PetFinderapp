const send_animal = () => {
  let get_animal = new Promise((resolve, reject) => {
    var animal = localStorage.getItem("animal");
    if (animal === "" || animal === "None" || animal.length === 0) {
      console.log("Resolve");
      resolve(animal);
    } else {
      console.log("REJECT");
      reject(animal);
    }
  });

  return get_animal;
};

export default send_animal;
