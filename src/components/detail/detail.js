import * as actionCreators from '../../redux/actionCreators/actionCreators';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { 
  withGoogleMap, 
  GoogleMap, 
  Marker 
} from "react-google-maps";
import './detail.less';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={props.center}
    center={props.center}
    onClick={props.onMapClick}>

    {props.markers.map((marker, i) => (
      <Marker
        key={i}
        {...marker}/>
    ))}

  </GoogleMap>
));

export class Detail extends React.Component {

  render() {

    const {
      restaurant,
      detailsVisible
    } = this.props;

    const {
      formattedPhone,
      twitter
    } = restaurant.contact || {};

    const {
      lat,
      lng,
      address,
      city,
      state,
      postalCode
    } = restaurant.location;

    const wrapperClass = classNames('detailsComponentWrapper', { active: detailsVisible });

    return (
      <div className={wrapperClass}>
        <div className="detailsComponent">
          <GettingStartedGoogleMap
              containerElement={
                <div className="mapContainer"/>
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              center={{ lat, lng }}
              onMapLoad={_.noop}
              onMapClick={_.noop}
              markers={[{
                position: { lat, lng }
              }]}
              onMarkerRightClick={_.noop}/>

          <div className="infoBand">
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.category}</h2>
          </div>

          <div className="businessDetails">
            <p>
              {address}
              <br/>
              {city} {state}, {postalCode}
            </p>
            <p>
              {formattedPhone}
            </p>
            {twitter && (
              <p>@{twitter}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatch = {
  ...actionCreators
};

const mapState = state => ({
  restaurant: state.site.toJS().activeRestaurant,
  detailsVisible: state.site.toJS().detailsVisible
});

export const DetailContainer = connect(mapState, mapDispatch)(Detail);
