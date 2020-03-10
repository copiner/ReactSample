import React, { Component } from 'react';

import { renderRoutes } from "react-router-config";

const Child = ({ route }) => (

  <span>
    <span>Child</span>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </span>
);

export default Child;
