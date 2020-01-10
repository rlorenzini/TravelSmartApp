import React from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from './routes/router';
import NoPageFound from './NoPageFound';

import './styling/navigation.css';

// add url and component into router.js
// use A tag with href url
// { routeResult || NoPageFound }
// where routeResult checks for url in router.js
// if no url renders the NoPageFound component

// <A> tags can be listed
// {rR||NPF} is where the components render
// can nest/style/organize this component
// and imported components as needed
// ex: <ul className="navigation"><A/><A/></ul>

function Navigation() {
  const routeResult = useRoutes(routes)

  return (
    <div>
      <div className="navigation">
        <A href='/'>INDEX</A>
        <A href='/dashboard'>DASHBOARD</A>
      </div>
      <div className="mainRenderedComponentContainer">
        {routeResult || <NoPageFound />}
      </div>
    </div>
  )
}

export default Navigation;
