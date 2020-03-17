import React from 'react';

const Data = ({deaths, confirmed, recovered}) => (
    <div>
        <ul>
            <li>Number of deaths: {deaths}</li>
            <li>Number of confirmed: {confirmed}</li>
            <li>Number of recovered: {recovered}</li>
        </ul>
    </div>
);

export default Data;