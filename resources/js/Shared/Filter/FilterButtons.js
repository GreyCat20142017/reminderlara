import React from 'react';

const FilterButtons = ({onFilterShow, onFilterReset, filtered, margin = 'mt-3'}) => (
    <>
        <button className={'btn btn-sm btn-outline-primary ' + margin} onClick={onFilterShow}
                title={'Выбрать ' + (filtered ? 'новый ' : '') + 'фильтр по тегу'}>
            Фильтр
        </button>
        {filtered &&
        <button className={'btn btn-sm btn-outline-primary ' + margin} onClick={onFilterReset}
                title={'Сбросить текущий фильтр'}>
            Cбросить
        </button>}
    </>
);

export default FilterButtons;
