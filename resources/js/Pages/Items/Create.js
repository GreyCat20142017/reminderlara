import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Errors from '@/Shared/Errors';
import {CONTENT_TITLES, CONTENT_TYPES} from '../../constants';
import {getPageTitle} from '../../functions';
import EditTags from './EditTags';
import EditRefs from './EditRefs';
import {ItemTags} from './ItemTags';


export default function Create({errors, type = CONTENT_TYPES.MEMO, allTags, referer}) {

    const [text, setText] = useState('');
    const [details, setDetails] = useState('');

    const [currentTags, setCurrentTags] = useState([]);
    const [tagsChanged, setTagsChanged] = useState(false);
    const [tagsMode, setTagsMode] = useState(false);

    const [currentRefs, setCurrentRefs] = useState([]);
    const [refsChanged, setRefsChanged] = useState(false);
    const [refsMode, setRefsMode] = useState(false);

    const createItem = event => {
        event.preventDefault();

        Inertia.post('/items', {
            text,
            details,
            type,
            referer,
            tags: tagsChanged ? currentTags.map(el => el.id) : false,
            refs: refsChanged ? currentRefs : false
        });
    };


    const editRefs = (evt) => {
        evt.preventDefault();
        setRefsMode(true);
    };

    return (
        <Layout>
            <div className='container'>
                <h4>Создание элемента: {getPageTitle(type)}</h4>
                <div className='col-md-12'>
                    <Errors errors={errors}/>

                    <div className='my-5'>
                        <div className='form-group'>
                            <label htmlFor='name'>Текст</label>
                            <input type='text' className='form-control' id='text' placeholder='Текст' value={text}
                                   title={'Текст'}
                                   onChange={(evt) => setText(evt.target.value)}/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Краткое решение или ответ</label>
                            <textarea className='form-control' id='details' placeholder='Решение или ответ'
                                      value={details} title={'Решение или ответ'} rows={7}
                                      onChange={(evt) => setDetails(evt.target.value)}/>
                        </div>

                        <div className='col-12 col-md-2 p-2 mt-2 border-light text-center'>
                            <ItemTags tags={currentTags} setTagsMode={setTagsMode} showTitle={false}/>
                        </div>

                        <button className='btn btn-sm btn-block btn-outline-secondary my-3' onClick={editRefs}
                                title={'Добавление полезных ссылок по теме'}>
                            Полезные ссылки по теме:
                        </button>

                        <button type='button' className='btn btn-primary' title={'Создать и сохранить'}
                                onClick={createItem}>
                            Создать элемент
                        </button>
                        <InertiaLink href={referer || `/items/${type}`} className='btn btn-secondary ml-2'
                                     title={'Вернуться к предыдущему экрану'}>
                            Назад
                        </InertiaLink>
                    </div>


                    {tagsMode && <EditTags setTagsMode={setTagsMode}
                                           currentTags={currentTags}
                                           setCurrentTags={setCurrentTags}
                                           allTags={allTags}
                                           isChanged={() => setTagsChanged(true)}/>}

                    {refsMode && <EditRefs setRefsMode={setRefsMode}
                                           currentRefs={currentRefs}
                                           setCurrentRefs={setCurrentRefs}
                                           isChanged={() => setRefsChanged(true)}/>}

                </div>
            </div>
        </Layout>
    )
}
