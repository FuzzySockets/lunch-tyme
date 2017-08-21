import * as actionCreators from '../../redux/actionCreators/actionCreators';
import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { MapWidget } from '../mapWidget/mapWidget';
import { InfoBand } from '../infoBand/infoBand';
import './detail.less';

export class Detail extends React.Component {

  render() {

    const { restaurant, detailsVisible } = this.props;
    const { twitter, formattedPhone } = restaurant.contact || {};
    const { lat, lng, address, city, state, postalCode } = restaurant.location; 
    const wrapperClass = classNames('detailsComponentWrapper', { 
      active: detailsVisible 
    });

    return (
      <div className={wrapperClass}>
        <div className="detailsComponent">

          <MapWidget
            onMapLoad={_.noop}
            onMapClick={_.noop}
            onMarkerRightClick={_.noop}
            containerElement={ <div className="mapContainer"/> }
            mapElement={ <div style={{ height: `100%` }} /> }
            center={{ lat, lng }}
            markers={[{ position: { lat, lng } }]}/>

          <InfoBand {...restaurant}/>

          <div className="businessDetails">
            <p>{address}<br/>{city} {state}, {postalCode}</p>
            <p>{formattedPhone}</p>
            {twitter && ( <p>@{twitter}</p> )}
          </div>

        </div>
      </div>
    );
  }
}

const mapDispatch = actionCreators;
const mapState = state => state.site.toJS();

export const DetailContainer = connect(
  mapState, 
  mapDispatch
)(Detail);
