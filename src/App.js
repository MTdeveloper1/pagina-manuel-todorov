import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Lenguage } from './components/Lenguage/Lenguage'
import { Inicio } from './components/es/Inicio'
import { Home } from './components/en/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Lenguage } />
          <Route path="/inicio" exact component={ Inicio } />
          <Route path="/home" exact component={ Home } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
