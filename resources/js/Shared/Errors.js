import React from 'react';

import {isNotEmptyArray} from '../functions';

const Errors = ({errors = {}}) => (
    errors && (typeof errors === 'object') && Object.keys(errors).length > 0 ?
        Object.keys(errors).map(key =>
            isNotEmptyArray(errors[key]) && <p key={key} className='p-0 m-0 text-danger'>
                {errors[key][0]}
            </p>)
        :
        null
);

export default Errors;
