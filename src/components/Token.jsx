
const API_URL = "https://api.petfinder.com/v2/oauth2/token"

  const Token = async () =>{
    const data = new Map();
    data["grant_type"] = process.env.REACT_APP_CLIENT;
    data["client_id"] = process.env.REACT_APP_ID;
    data["client_secret"] = process.env.REACT_APP_SECRET;
  const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json_data = await response.json()

    return json_data["access_token"]

  }

    export default Token