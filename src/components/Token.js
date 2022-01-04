import { mySecrets } from "./env.js";

const send = () => {
  const data = new Map();
  data["grant_type"] = "client_credentials";
  data["client_id"] = mySecrets()["id"];
  data["client_secret"] = mySecrets()["secret"];

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  let token = postData("https://api.petfinder.com/v2/oauth2/token", data).then(
    (data) => {
      return (data["Token"] = data);
    }
  );

  return data["Token"];
};

export default send;
