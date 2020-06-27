import React, {useEffect, useState} from 'react';
import {KEYCODES} from '../../constants';

const TagList = ({tags, isAll = false, onTagClick}) => (
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

export default ({currentTags, setCurrentTags, allTags, unsetDetails, isChanged}) => {

    const [current, setCurrent] = useState(currentTags);
    const [all, setAll] = useState(allTags);


    useEffect(() => {
        const filtered = allTags.filter(el => !currentTags.find(curEl => curEl.id === el.id));
        setAll(filtered);
    }, [currentTags, allTags, setAll]);

    const onKeyDown = (evt) => {
        if (evt.keyCode === KEYCODES.ESC) {
            evt.preventDefault();
            unsetDetails();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    });

    const onSave = () => {
        isChanged(true);
        setCurrentTags(current);
        unsetDetails();
    };

    const deleteFromCurrent = (ind) => {
        const el = {...current[ind]};
        setCurrent([...current.filter((el, index) => ind !== index)]);
        setAll([...all, {...el}])
    };

    const addToCurrent = (ind) => {
        const el = {...all[ind]};
        setAll([...all.filter((el, index) => ind !== index)]);
        setCurrent([...current, {...el}]);
    };

    return (
        <div className='mt-4 p-3 shadow-lg fixed-bottom bg-white container overflow-auto min-vh-100'>

            <h5 className='text-center my-3'>Выбор тегов</h5>
            <div className='row'>
                <div className='w-50 p-1'>
                    <TagList tags={current} isAll={false} onTagClick={deleteFromCurrent}/>
                </div>
                <div className='w-50 p-1'>
                    <TagList tags={all} isAll={true} onTagClick={addToCurrent}/>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                <button className='btn btn-sm btn-primary m-1' onClick={onSave} type={'button'}
                        title='сохранить изменения предварительно'>
                    сохранить изменения
                </button>
                <button className='btn btn-sm btn-secondary m-1' onClick={unsetDetails} type={'button'}
                        title='Для возврата к предыдущему экрану - Еsc'>
                    выйти (ESC)
                </button>
            </div>

        </div>
    );
};

