import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Button from "./components/Button";
import Submit from "./components/Submit";
import { Route } from "react-router-dom";

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
      <Submit />
    </div>
  );
}

export default App;
