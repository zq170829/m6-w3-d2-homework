import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <h1 style={{ padding: 50 }}>TV APPS</h1>
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/Netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              className="nf"
              alt="Netflix Logo"
            />
          </Link>
          <Link to="/Hbo Max">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              className="hb"
              alt="HBO Max Logo"
            />
          </Link>
          <Link to="/Hulu">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
              className="hu"
              alt="Hulu Logo"
            />
          </Link>
          <Link to="/Prime Video">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              className="pr"
              alt="Prime Video Logo"
            />
          </Link>
        </nav>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </Router>
    </div>
  );
}

function Child() {
  const { id } = useParams();
  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}
