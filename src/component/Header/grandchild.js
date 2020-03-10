import React, { Component } from 'react';

export default ({ someProp }) => (
  <span>
    <span>Grand Child</span>
    <span>{someProp}</span>
  </span>
);
