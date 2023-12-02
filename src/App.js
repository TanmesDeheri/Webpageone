import Controller from "main/Controller";
import 'App.css'
import FOOTER from "Components/common/FOOTER";
import HEADER from "Components/common/HEADER";
function App() {
  return (
    <div className="App">
      <header>
        <HEADER />
      </header>
      <Controller />
      <footer>
        <FOOTER />
      </footer>
    </div>
  );
}

export default App;
