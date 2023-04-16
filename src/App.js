import Liste from "./components/liste/liste";
import Navv from "./components/navbar/nav";
import Footter from "./footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* partie nav */}
      <Navv />
      {/* contenue de page */}
      <div id="contenue">
        <Liste />
      </div>
      {/* pied de page*/}
      <Footter />
    </div>
  );
}

export default App;
