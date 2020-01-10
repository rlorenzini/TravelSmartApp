import React from 'react';
import Index from '../Index';
import Dashboard from '../Dashboard';

// "url" : () => <component />
// if url, render component

const routes = {
  "/": () => <Index />,
  "/dashboard": () => <Dashboard />
}

export default routes;
