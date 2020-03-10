import React, { Component } from 'react';

import { renderRoutes } from "react-router-config";

export default ({ route }) => (
  <span>
    <span>One</span>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </span>
);
