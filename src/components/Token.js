const send = () => {
  const data = new Map();
  data["grant_type"] = process.env.REACT_APP_CLIENT;
  data["client_id"] = process.env.REACT_APP_ID;
  data["client_secret"] = process.env.REACT_APP_SECRET;

  let get_token = new Promise((resolve, reject) => {
    let token = fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (token != null) {
      resolve(token);
    }
  });

  get_token
    .then((token) => {
      token.json().then((json) => {
        console.log(json["access_token"]);
      });
    })
    .catch((token) => {
      console.log("catching " + token);
    });

  return get_token;
};

export default send;
