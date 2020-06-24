import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={PageA} />
    <Route path="/bc" component={PageB} />
    <Route path="/bc" component={PageC} />
  </BrowserRouter>,
  document.getElementById('root')
);