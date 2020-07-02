import React, {useEffect, useState} from 'react';
import SimpleTable from '../../Shared/SimpleTable/SimpleTable';
import {KEYCODES} from '../../constants';
import isAbsoluteUrl from 'is-absolute-url';

const RefForm = ({onRefSave, onRefCancel, newRef, setNewRef}) => (
    <form className='mt-4 p-2 bg-light'>
        <h6>Добавление ссылки</h6>
        <div className='form-group'>
            <label htmlFor='newRef'>Ссылка: </label>
            <span
                className='text-danger'>{newRef.trim() === '' || isAbsoluteUrl(newRef) ? '' : ' небходимо указать правильный url'}</span>
            <input type='text' className={'form-control my-2 ' + (isAbsoluteUrl(newRef) ? '' : 'text-danger')}
                   id='newRef' placeholder='ссылка' value={newRef} required
                   title={'Полезная ссылка'}
                   onChange={(evt) => setNewRef(evt.target.value)}/>
            <button className='btn btn-sm btn-primary m-1' onClick={onRefSave} type={'button'}
                    title='сохранить изменения предварительно'>
                сохранить ссылку
            </button>
            <button className='btn btn-sm btn-secondary m-1' onClick={onRefCancel} type={'button'}
                    title='Не сохранять ссылку'>
                не сохранять
            </button>
        </div>
    </form>
);

const EditRefs = ({
                      setRefsMode,
                      currentRefs,
                      setCurrentRefs,
                      isChanged
                  }) => {

    const [newRef, setNewRef] = useState('');
    const [addMode, setAddMode] = useState(false);

    const onKeyDown = (evt) => {
        if (evt.keyCode === KEYCODES.ESC) {
            evt.preventDefault();
            setRefsMode(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    });

    const onSave = () => {
        setRefsMode(false);
    };

    const onClose = () => {
        setRefsMode(false);
    };

    const deleteRef = (ind) => {
        setCurrentRefs(currentRefs.filter((el, index) => index !== ind), newRef);
        isChanged();
    };

    const addRef = () => {
        setAddMode(true);
    };

    const onRefSave = (evt) => {
        evt.preventDefault();
        setCurrentRefs([...currentRefs, newRef]);
        setNewRef('');
        setAddMode(false);
        isChanged();
    };

    const onRefCancel = (evt) => {
        evt.preventDefault();
        setNewRef('');
        setAddMode(false);
    };

    return (
        <div className='mt-4 p-3 shadow-lg fixed-bottom bg-white container overflow-auto min-vh-100 text-center'>
            <h5>Полезные ссылки по теме</h5>
            {!addMode &&
            <>
                <button className={'btn btn-sm'} title={'Добавить'} onClick={addRef}>
                    +
                </button>
                <SimpleTable data={currentRefs} del={deleteRef} hiddenColumns={['id', 'item_id']}/>
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
            </>
            }
            {addMode && <RefForm onRefSave={onRefSave} onRefCancel={onRefCancel}
                                 newRef={newRef} setNewRef={setNewRef}/>
            }
        </div>

    )
};

export default EditRefs;
