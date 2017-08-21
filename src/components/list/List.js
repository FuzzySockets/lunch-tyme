import * as actionCreators from '../../redux/actionCreators/actionCreators';
import React from 'react';
import { connect } from 'react-redux';
import './list.less';

const ListItem = props => (
  <div onClick={props.onClick} className="listItem">
    <img src={props.backgroundImageURL}/>
    <div className="details">
      <h1>{props.name}</h1>
      <h2>{props.category}</h2>
    </div>
  </div>
)

export class List extends React.Component {

  render() {

    const { 
      restaurants,
      setActiveRestaurant,
      toggleDetails
    } = this.props;

    return (
      <div className="listComponent">
        {
          restaurants.map((restaurant, i) => (
            <ListItem 
              onClick={() => {
                setActiveRestaurant(restaurant);
                toggleDetails();
              }} 
              key={i} 
              {...restaurant}/>
          ))
        }
      </div>
    )
  }
}

const mapDispatch = {
  ...actionCreators
};

const mapState = state => ({
  restaurants: state.site.toJS().restaurants
});

export const ListContainer = connect(mapState, mapDispatch)(List);
