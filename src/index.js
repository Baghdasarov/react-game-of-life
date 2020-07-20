import React from 'react';
import ReactDOM from 'react-dom';
import './assets/App.css';
import * as serviceWorker from './serviceWorker';
import Game from "./components/Game";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
