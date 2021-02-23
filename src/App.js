import { Container } from "./Container/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigation } from "./Container/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JokePage } from "./Container/Joke";
import { Quote } from "./Container/Quote";
import {Gifs} from './Container/Gifs';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Container} />
          <Route exact path="/jokes" component={JokePage} />
          <Route exact path="/quotes" component={Quote} />
          <Route exact path="/gifs" component={Gifs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
