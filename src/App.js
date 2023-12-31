import './App.css';
import Weather from "./Weather.js";
import './Weather.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon"/>
    <footer>
      This project was coded by Mariana Carvalho and is open-sourced on {""}
        <a href="https://github.com/MarianavCarvalho/weather-react-project" target="_blank" rel="noreferrer"> GitHub</a> {""}and hosted on <a
            href="https://weatherreactprojectshecodes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
             Netlify
          </a>
    </footer>
    </div>
    </div>
  );
}


