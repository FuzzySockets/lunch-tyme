import * as actionCreators from '../../redux/actionCreators/actionCreators';
import _ from 'lodash';
import React from 'react';
import { Header } from '../header/header';
import { ListContainer } from '../list/list';
import { DetailContainer } from '../detail/detail';
import { connect } from 'react-redux';

export class Wrapper extends React.Component {
  render() {

    const {
      detailsVisible,
      toggleDetails
    } = this.props;

    return (
      <div>

        <Header
          detailsVisible={detailsVisible}
          onBack={toggleDetails}/>

        <DetailContainer/>
        <ListContainer/>
      </div>
    );
  }
}

const mapDispatch = {
  ...actionCreators
};

const mapState = state => ({
  detailsVisible: state.site.toJS().detailsVisible
});

export const WrapperContainer = connect(mapState, mapDispatch)(Wrapper);
