import React from 'react';

export default ({actions}) => (
    actions ? Object.keys(actions).map(key => (
        <th style={{width: '20px'}} key={'action-' + key}></th>
    )) : null
);
