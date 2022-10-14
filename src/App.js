import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Button from "./components/Button";
import Request from "./components/Token";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="container">
      <div className="main1">
        <Header />
      </div>
      <div className="main2">
        <Content />
      </div>
      <br />
      <div className="main3">
        <Button />
      </div>
      {/* <Request />
      <Fetch /> */}
    </div>
  );
}

export default App;
