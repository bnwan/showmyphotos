import React from 'react';
import domready from 'domready';
import Router from 'react-router';

import './styles.styl';

import Header from './components/header/header';
import Home from './pages/home';
import About from './pages/about';

const RouterHandler = Router.RouteHandler;

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='content-body'>
          <RouterHandler />
        </div>
      </div>
    );
  }
}

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}></DefaultRoute>

    <Route path='home' handler={Home}></Route>
    <Route path='about' handler={About}></Route>
  </Route>
);

domready(() => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});
