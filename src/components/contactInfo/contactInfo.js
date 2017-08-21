import React from 'react';
import './contactInfo.less';

export const ContactInfo = props => (
  <div className="contactInfo">
    <p>{props.address}<br/>{props.city} {props.state}, {props.postalCode}</p>
    <p>{props.formattedPhone}</p>
    {props.twitter && ( <p>@{props.twitter}</p> )}
  </div>
);
