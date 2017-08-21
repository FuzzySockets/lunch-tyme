import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import backArrow from '../../../assets/backArrow.png';
import './header.less';

export const Header = props => {

  const imageClass = classNames({
    visible: props.detailsVisible 
  });
  
  return (
    <header>
      <div className="wrapper">

        <img 
          className={imageClass}
          onClick={props.onBack}
          src={backArrow}/>

        <h1>Lunch Tyme</h1>

      </div>
    </header>
  );
}
