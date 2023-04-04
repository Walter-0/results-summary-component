import Results from "./Results";
import "./index.css";
import data from "../data.json";

function App() {
  return (
    <div className="App relative h-screen font-hankenGrotesk lg:flex lg:flex-col lg:items-center lg:justify-center">
      <Results data={data} />
      <div className="absolute inset-x-0 bottom-0 text-center">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          {" "}
          Frontend Mentor.{" "}
        </a>
        Coded by <a href="https://walteraugustine.com">Walter</a>.
      </div>
    </div>
  );
}

export default App;
