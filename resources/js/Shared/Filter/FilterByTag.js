import React from 'react';

const FilterByTag = ({allTags, setFilterMode, onFilter, title}) => {

    const onSelectTagFilter = (id) => {
        onFilter(id);
    };

    const onCancel = () => setFilterMode(false);

    const onClearFilter = () => onFilter();

    return (
        <>
            <h3>{title}</h3>
            <h5 className='text-primary'>Применить фильтр по:</h5>
            <hr/>
            <div className='d-flex flex-wrap  justify-content-center w-100'>
                {allTags.map((tag, ind) =>
                    <button className='p-1 m-1 btn btn-sm btn-outline-primary' key={ind}
                            onClick={() => onSelectTagFilter(tag['id'])}>
                        {tag['name'] || ''}
                    </button>)}
            </div>
            <button className='p-1 m-2 btn btn-block btn-outline-primary' onClick={onClearFilter}
                    title={'Отменить текущий фильтр'}>
                Все записи
            </button>
            <hr/>
            <button className='p-1 m-2 btn btn-block btn-primary' onClick={onCancel}
                    title={'Не применять фильтр и вернуться к предыдущему экрану'}>
                Назад
            </button>
        </>
    )
};

export default FilterByTag;
