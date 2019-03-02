import React from 'react';

export default ({ item, index }) => (
    <li key={index}> <p> {item} {`${index}#`}</p>
        <span role="img" aria-label="close">&#10060; </span>
    </li>
);