import React from 'react';
// Components
import Navigation from './Navigation';
// Styling 
import "./styling/baseLayout.css";

// baselayout imports and displays navigation, which handles displaying components

function BaseLayout() {
  return (
    <div className="baseLayoutDisplay">
      <Navigation />
    </div>
  )
}

export default BaseLayout;
