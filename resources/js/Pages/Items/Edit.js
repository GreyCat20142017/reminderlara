import React, {useState, useEffect} from 'react'
import {Inertia} from '@inertiajs/inertia'
import Layout from '@/Shared/Layout'
import {InertiaLink} from '@inertiajs/inertia-react';

const Edit = ({errors, item, readOnly = false}) => {
    const [text, setText] = useState(item['text']);
    const [details, setDetails] = useState(item['details']);

    const update = evt => {
        evt.preventDefault();
        Inertia.patch(`/items/${item['id']}`, {
            text,
            details
        })
    }


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
                <div className='col-md-6'>
                    <h4>Изменение элемента</h4>
                    {Object.keys(errors).length > 0 &&
                    <div className='alert alert-danger mt-4'>
                        {errors[Object.keys(errors)[0]][0]}
                    </div>
                    }

                    <form action='/items' method='POST' className='my-5' onSubmit={update}>
                        <div className="form-group">
                            <label htmlFor="name">Текст</label>
                            <input type="text" className="form-control" id="text" placeholder="Текст" value={text}
                                   title={'Текст'}
                                   onChange={(evt) => setText(evt.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Краткое решение или ответ</label>
                            <input type="text" className="form-control" id="details" placeholder="Решение или ответ"
                                   value={details} title={'Решение или ответ'}
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
                            <InertiaLink className='btn btn-secondary text-dark ml-3' href='/items'
                                         title={'Вернуться к предыдущему экрану без сохранения изменений'}>
                                Назад
                            </InertiaLink>
                        </div>
                    </form>
                </div>

            </div>
        </Layout>
    )
};

export default Edit;
