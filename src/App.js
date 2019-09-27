import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import About from './About.js';
import Contact from './Contact.jsx';
import Login from './Login.js';
import Register from './Register.js';
import './App.css';

function App() {
  return (
    <div className="App">

    <Router>

      <Header />
      

          <Switch>

              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />

          </Switch>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
