import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Button from "./components/Button";
import { Results } from "./components/Results";

function App() {
  return (
    <div className="container">
      <div className="main1">
        <Header />
      </div>
      <div className="main2">
        <Content />
      </div>
      <Button />
    </div>
  );
}

export default App;
