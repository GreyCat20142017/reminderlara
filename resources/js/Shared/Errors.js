import React from 'react';

export const Errors = ({errors = {}}) => (
    errors && Object.keys(errors).length > 0 ?
        Object.keys(errors).join(', ') :
        null
);
