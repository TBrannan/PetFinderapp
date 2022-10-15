import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Button from "./components/Button";
import Test from "./components/Test";

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
      <Test />
    </div>
  );
}

export default App;
