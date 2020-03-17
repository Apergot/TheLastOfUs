import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DataContainer = styled.div`
    text-align:center;
`;

const Number = styled.p`
    font-size:2rem;
    font-weight:bold;
`;

const Title = styled.p`
    font-size:1rem;
`;

const Data = ({number, title}) => (
    <DataContainer>
        <Number>{number}</Number>
        <Title>{title}</Title>
    </DataContainer>
);

Data.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Data;