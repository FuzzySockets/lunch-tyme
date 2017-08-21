import * as actionCreators from '../../redux/actionCreators/actionCreators';
import React from 'react';
import { ListItem } from '../listItem/listItem';
import { connect } from 'react-redux';
import './list.less';

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
    );
  }
}

const mapDispatch = actionCreators;
const mapState = state => state.site.toJS();

export const ListContainer = connect(
  mapState, 
  mapDispatch
)(List);
