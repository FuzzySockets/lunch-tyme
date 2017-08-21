import React from 'react';

export const ListItem = props => (
  <div onClick={props.onClick} className="listItem">
    <img src={props.backgroundImageURL}/>
    <div className="details">
      <h1>{props.name}</h1>
      <h2>{props.category}</h2>
    </div>
  </div>
);
