import React from 'react';

import {isNotEmptyArray} from '@/functions';

const TagList = ({tags}) => (
    <div className='d-flex flex-wrap  justify-content-center w-100'>
        {tags.map((tag, ind) =>
            <span className='p-1 m-1 btn btn-sm btn-outline-primary' key={ind}>
                {tag['name'] || ''}
            </span>)}
    </div>
);

export const ItemTags = ({tags, setTagsMode, showTitle = true}) => {

    const onButtonClick = (evt) => {
        evt.preventDefault();
        setTagsMode(true);
    };

    return (
        <>
            {showTitle && <h5 className='text-primary mt-2 mt-md-0'>Теги</h5>}
            {isNotEmptyArray(tags) ?
                <TagList tags={tags}/> :
                <p className='m-1 p-0 text-primary'>
                    <small>нет привязанных тегов</small>
                </p>
            }
            <button className="btn btn-sm btn-primary mx-1 mb-1 mt-3" onClick={onButtonClick}
                    title={'добавить/удалить теги в список'}>
                выбор тегов
            </button>
        </>
    )
};
