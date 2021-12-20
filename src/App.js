import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <div className="selection">
        <Header />
        <h2>What type of pet would you like?</h2>
        <Content />
        <div className="btn-center">
          <Button />
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
