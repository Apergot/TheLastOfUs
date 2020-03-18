import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';

const DataContainer = styled.div`
    color: ${props => props.theme.color};
    text-align:center;
`;

const Number = styled.p`
    font-size:2rem;
    font-weight:bold;
`;

const Title = styled.p`
    font-size:1rem;
`;

const Data = ({number, title}) => {

    const theme = useContext(ThemeContext);

    return (
    <DataContainer theme={theme}>
        <Number>{number}</Number>
        <Title>{title}</Title>
    </DataContainer>
    );
};

Data.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Data;