import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';
import PageX from './PageX';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={PageA} />
    <Route path="/b" component={PageB} />
    <Route path="/c" component={PageC} />
    <Route path="/bc" component={PageB} />
    <Route path="/bc" component={PageC} />
    <Route path="/path/*" component={PageX} />
  </BrowserRouter>,
  document.getElementById('root')
);