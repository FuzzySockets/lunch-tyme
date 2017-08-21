import React from 'react';
import './infoBand.less';

export const InfoBand = props => (
  <div className="infoBand">
    <h1>{props.name}</h1>
    <h2>{props.category}</h2>
  </div>
);
