import React from 'react';
import Index from '../Index';
import Dashboard from '../Dashboard';

// "url" : () => <component />
// if url, render component

// global routing using hooks library 'hookrouter'
// multiple ways to assign routes to components; this is a clean and simple way

const routes = {
  "/": () => <Index />,
  "/dashboard": () => <Dashboard />
}

export default routes;
