import React from "react";
import { render } from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

const Head = () => (
  <Router history={history}>
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Route
        exact
        path="/"
        render={() => (
          <>
            <meta name="description" content="Home description" />
            <title>Home page great stuff</title>
          </>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <>
            <meta name="description" content="About description" />
            <title>About page</title>
          </>
        )}
      />
      <Route
        path="/topics/:id?"
        render={({ match }) => (
          <>
            <meta name="description" content="Topics description" />
            <title>
              {match.params.id ? `Topics - ${match.params.id}` : "Topics"}
            </title>
          </>
        )}
      />
    </>
  </Router>
);

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

render(<Head />, document.querySelector("head"));
render(<App />, document.getElementById("app"));
