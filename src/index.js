import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TicTacToe from './components/TicTacToe';
import NomadArtGroup from './components/NomadArtGroup';
import Spaceship from './components/Spaceship';
import Tower from './components/Tower';
import PrimeNumbersClient from './components/PrimeNumbersClient';
import PrimeNumbersServer from './components/PrimeNumbersServer';

const Routes= (
  <Router>

    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tic-tac-toe" component={TicTacToe} />
      <Route exact path="/nomad-art-group" component={NomadArtGroup} />
      <Route exact path="/spaceship-game" component={Spaceship} />
      <Route exact path="/tower-game" component={Tower} />
      <Route exact path="/prime-numbers-client" component={PrimeNumbersClient} />
      <Route exact path="/prime-numbers-server" component={PrimeNumbersServer} />

    </div>

  </Router>
);

ReactDOM.render(Routes , document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
