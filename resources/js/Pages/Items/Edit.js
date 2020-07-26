import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout'
import Errors from '@/Shared/Errors';
import EditTags from './EditTags';
import {CONTENT_TYPES} from '@/constants';
import {getPageTitle} from '@/functions';
import EditRefs from './EditRefs';
import {ItemTags} from './ItemTags';


export default ({errors, allTags, item, tags, readOnly = false, refs = [], referer}) => {
    const [text, setText] = useState(item['text']);
    const [details, setDetails] = useState(item['details']);

    const [currentTags, setCurrentTags] = useState([...tags]);
    const [tagsChanged, setTagsChanged] = useState(false);
    const [tagsMode, setTagsMode] = useState(false);

    const [currentRefs, setCurrentRefs] = useState(refs.map(el => el['url']));
    const [refsChanged, setRefsChanged] = useState(false);
    const [refsMode, setRefsMode] = useState(false);


    const type = item['type'] || CONTENT_TYPES.MEMO;

    const update = evt => {
        evt.preventDefault();
        Inertia.patch(`/items/${item['id']}`, {
            text,
            details,
            tags: tagsChanged ? currentTags.map(el => el.id) : false,
            refs: refsChanged ? currentRefs : false,
            referer: referer
        })
    };

    const deleteItem = evt => {
        evt.preventDefault();

        if (confirm('Вы действительно хотите удалить элемент?')) {
            Inertia.delete(`/items/${item['id']}`)
                .then(() => {
                })
        }
    };

    const editRefs = (evt) => {
        evt.preventDefault();
        setRefsMode(true);
    };

    return (
        <Layout>
            <div className='container text-align-center my-2'>

                <h4>Изменение элемента: {getPageTitle(type)}</h4>
                <Errors errors={{errors}}/>

                <form action='/items' method='POST' className='my-3 row' onSubmit={update}>
                    <div className="col-12 col-md-10">
                        <div className="form-group">
                            <label htmlFor="text">Текст:</label>
                            <input type="text" className="form-control" id="text" placeholder="Текст" value={text}
                                   title={'Текст'}
                                   onChange={(evt) => setText(evt.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="details">Краткое решение или ответ:</label>
                            <textarea className="form-control no-resize" id="details"
                                      placeholder="Решение или ответ"
                                      value={details} title={'Решение или ответ'} rows={7}
                                      onChange={(evt) => setDetails(evt.target.value)}/>
                        </div>

                        <button className='btn btn-sm btn-block btn-outline-secondary my-3' onClick={editRefs}
                                title={'Просмотр и изменение полезных ссылок по теме'}>
                            Полезные ссылки по теме:
                        </button>

                        <div className={'btn-group d-flex justify-content-center'}>
                            <button className='btn btn-primary' type='submit' disabled={readOnly}
                                    title={'Сохранить изменения'}>
                                <span>Сохранить</span>
                            </button>
                            <button className='btn btn-danger ml-3' onClick={deleteItem} disabled={readOnly}
                                    title={'Удалить элемент'}>
                                Удалить
                            </button>
                            <InertiaLink className='btn btn-secondary text-white ml-3'
                                         href={referer || `/items/${type}`}
                                         title={'Вернуться к предыдущему экрану без сохранения изменений'}>
                                Назад
                            </InertiaLink>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 p-2 mt-2 border-light text-center">
                        <ItemTags tags={currentTags} setTagsMode={setTagsMode}/>
                    </div>
                </form>


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
        </Layout>
    )
};
