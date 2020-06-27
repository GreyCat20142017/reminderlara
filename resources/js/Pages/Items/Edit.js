import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout'
import Errors from '@/Shared/Errors';
import EditTags from './EditTags';
import {CONTENT_TYPES} from '../../constants';
import {getPageTitle, isNotEmptyArray} from '../../functions';


const TagList = ({tags}) => (
    <div className='d-flex flex-wrap  justify-content-center w-100'>
        {tags.map((tag, ind) =>
            <span className='p-1 m-1 btn btn-sm btn-outline-primary' key={ind}>
                {tag['name'] || ''}
            </span>)}
    </div>
);

const ItemTags = ({tags, setTagsMode}) => {

    const onButtonClick = (evt) => {
        evt.preventDefault();
        setTagsMode(true);
    }

    return (
        <>
            <h5 className='text-primary'>Теги</h5>
            {isNotEmptyArray(tags) ?
                <TagList tags={tags}/> :
                <p className='m-1 p-0 text-primary'>
                    <small>нет привязанных тегов</small>
                </p>
            }
            <button className="btn btn-sm btn-primary mx-1 mb-1 mt-3" onClick={onButtonClick}
                    title={'добавить/удалить теги в список'}>
                Изменить список тегов
            </button>
        </>
    )
};

export default ({errors, allTags, item, tags, readOnly = false}) => {
    const [text, setText] = useState(item['text']);
    const [details, setDetails] = useState(item['details']);
    const [currentTags, setCurrentTags] = useState([...tags]);
    const [tagsChanged, setTagsChanged] = useState(false);

    const [tagsMode, setTagsMode] = useState(false);

    const type = item['type'] || CONTENT_TYPES.MEMO;

    const update = evt => {
        evt.preventDefault();
        Inertia.patch(`/items/${item['id']}`, {
            text,
            details,
            tags: tagsChanged ? currentTags.map(el => el.id) : false
        })
    };

    const deleteTag = evt => {
        evt.preventDefault();

        if (confirm('Вы действительно хотите удалить элемент?')) {
            Inertia.delete(`/items/${item['id']}`)
                .then(() => {
                })
        }
    };

    return (
        <Layout>
            <div className='container'>
                <div className='col-md-12'>

                    <h4>Изменение элемента: {getPageTitle(type)}</h4>
                    <Errors errors={{errors}}/>

                    <form action='/items' method='POST' className='my-5 row' onSubmit={update}>
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

                            <div className={'btn-group'}>
                                <button className='btn btn-primary' type='submit' disabled={readOnly}
                                        title={'Сохранить изменения'}>
                                    <span>Изменить</span>
                                </button>
                                <button className='btn btn-danger ml-3' onClick={deleteTag} disabled={readOnly}
                                        title={'Удалить тег'}>
                                    Удалить
                                </button>
                                <InertiaLink className='btn btn-secondary text-white ml-3' href={`/items/${type}`}
                                             title={'Вернуться к предыдущему экрану без сохранения изменений'}>
                                    Назад
                                </InertiaLink>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 p-2 mt-2 border-light text-center">
                            <ItemTags tags={currentTags} setTagsMode={setTagsMode}/>
                        </div>
                    </form>

                    {tagsMode && <EditTags currentTags={currentTags}
                                           unsetDetails={() => setTagsMode(false)}
                                           allTags={allTags}
                                           setCurrentTags={setCurrentTags}
                                           isChanged={() => setTagsChanged(true)}/>}

                </div>

            </div>
        </Layout>
    )
};
