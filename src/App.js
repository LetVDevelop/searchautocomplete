import logo from "./logo.svg";
import "./App.css";
import Search from "./Search/AutoComplete";

function App() {
  const ProgLang = ["Javascript", "Java", "Python", "Nodejs", "Reactjs"];
  return (
    <div className="container">
      <Search lang={ProgLang} />
    </div>
  );
}

export default App;
