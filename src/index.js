import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={PageA} />
    <Route path="/b" component={PageB} />
  </BrowserRouter>,
  document.getElementById('root')
);