import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { BrowserRouter, Switch , Route } from 'react-router-dom';
import Content from './components/content';
import NotFound from './notFound';
import PrivateRoute from '../src/components/PrivateRoute';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Switch>
     <Route path="/" exact={true} component={App} />
     <PrivateRoute path="/listClients" component={Content} />
     <Route path="*" component={NotFound} />
   </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);