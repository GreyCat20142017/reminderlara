import React from 'react';

export const TagList = ({tags, isAll = false, onTagClick}) => (
    <div className='px-1 py-2'>
        <p className={'w-100 text-center bg-light ' + (isAll ? 'text-info' : 'text-primary')}>
            {isAll ? 'все' : 'выбранные'}
        </p>
        <div className='d-flex flex-wrap justify-content-center w-100'>
            {tags.map((tag, ind) =>
                <button className={'p-1 m-1 btn btn-sm ' + (isAll ? 'btn-outline-info' : 'btn-outline-primary')}
                        key={ind}
                        onClick={() => onTagClick(ind)}>
                    {tag['name'] || ''}
                </button>)}
        </div>
    </div>
);
