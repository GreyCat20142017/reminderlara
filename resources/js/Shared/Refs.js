import React from 'react';

const Refs = ({refs}) => (
    refs && refs.length > 0 ?
        <div className='d-flex flex-wrap my-2'>
            <span className='btn btn-sm text-secondary m-1'>ссылки:</span>
            {refs.map((ref, ind) => (
                <a className='btn btn-sm btn-outline-secondary m-1' href={ref['url']} key={ind}
                   title={ref['url']} target='_blank' rel='noreferer noopener'>
                    {ind + 1}
                </a>
            ))}

        </div> :
        <p>
            <small>нет добавленных ссылок</small>
        </p>
);


export default Refs;
