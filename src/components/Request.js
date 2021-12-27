import PropTypes from "prop-types";

const send = () => {
  const data = new Map();
  const client_id = "<client_id>";
  const client_secret = "<client_secret>";
  data["grant_type"] = "client_credentials";
  data["client_id"] = client_id;
  data["client_secret"] = client_secret;

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
      console.log(data["access_token"]);
    }
  );

  return <></>;
};

export default send;
