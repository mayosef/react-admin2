import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import Gallery from './Gallery';
import Posts from './Posts';
import AmountControl from './AmountControl';


class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/posts">Blog</Link></li>
              <li><Link to="/counter">Counter</Link></li>
            </ul>

          </nav>
        </header>
          <main>
            <Route path="/"exact component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/counter" component={AmountControl} />
          </main>
      </Router>

    );
  }
}

export default App;
