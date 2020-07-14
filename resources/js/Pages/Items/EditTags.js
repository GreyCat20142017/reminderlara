import React, {useEffect, useState} from 'react';
import {KEYCODES} from '../../constants';
import {TagList} from './TagList';

export default ({currentTags, setCurrentTags, allTags, setTagsMode, isChanged}) => {

    const [current, setCurrent] = useState(currentTags);
    const [all, setAll] = useState(allTags);


    useEffect(() => {
        const filtered = allTags.filter(el => !currentTags.find(curEl => curEl.id === el.id));
        setAll(filtered);
    }, [currentTags, allTags, setAll]);

    const onKeyDown = (evt) => {
        if (evt.keyCode === KEYCODES.ESC) {
            evt.preventDefault();
            setTagsMode(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    });

    const onSave = () => {
        isChanged(true);
        setCurrentTags(current);
        setTagsMode(false);
    };

    const onClose = () => {
      setTagsMode(false);
    };

    const deleteFromCurrent = (ind) => {
        setCurrent(current.filter((el, index) => ind !== index));
        setAll([...all, {...el}])
    };

    const addToCurrent = (ind) => {
        const el = {...all[ind]};
        setAll(all.filter((el, index) => ind !== index));
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
            <p className='text-center text-primary'>
                <small>Для перемещения тега из "выбранных" в раздел "все" и наоборот - клик по тегу</small>
            </p>
            <div className='d-flex justify-content-center flex-wrap'>
                <button className='btn btn-sm btn-primary m-1' onClick={onSave} type={'button'}
                        title='сохранить изменения предварительно'>
                    сохранить изменения
                </button>
                <button className='btn btn-sm btn-secondary m-1' onClick={onClose} type={'button'}
                        title='Для возврата к предыдущему экрану - Еsc'>
                    выйти (ESC)
                </button>
            </div>

        </div>
    );
};

