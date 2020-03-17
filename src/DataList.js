import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from './components/UI/FlexContainer'
import Data from './Data';

const DataList = ({deaths, confirmed, recovered}) => (
    <FlexContainer>
      <Data number={deaths} title="Deaths"/>
      <Data number={confirmed} title="Cases confirmed"/>
      <Data number={recovered} title="Cases recovered"/>
    </FlexContainer>
);

DataList.propTypes = {
    deaths: PropTypes.number.isRequired,
    confirmed: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired
};

export default DataList;