import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Button from "./components/Button";


function App() {


  return (
    <>
      <div className="container">
        <div className="main1">
          <Header />
        </div>
        <div className="main2">
          <Content />
        </div>
      </div>
      <br></br>
      <div>
        <Button />
      </div>
    </>
  );
}

export default App;
