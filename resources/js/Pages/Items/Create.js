import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Errors from '@/Shared/Errors';
import {CONTENT_TITLES, CONTENT_TYPES} from '../../constants';
import {getPageTitle} from '../../functions';

export default function Create({errors, type = CONTENT_TYPES.MEMO, referer}) {

    const [text, setText] = useState('');
    const [details, setDetails] = useState('');

    const createItem = event => {
        event.preventDefault();

        Inertia.post('/items', {
            text,
            details,
            type,
            referer
        });
    };

    return (
        <Layout>
            <div className="container">
                <h4>Создание элемента: {getPageTitle(type)}</h4>
                <div className="col-md-12">
                    <Errors errors={errors}/>

                    <form action="/tags" method="POST" className="my-5" onSubmit={createItem}>
                        <div className="form-group">
                            <label htmlFor="name">Текст</label>
                            <input type="text" className="form-control" id="text" placeholder="Текст" value={text}
                                   title={'Текст'}
                                   onChange={(evt) => setText(evt.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Краткое решение или ответ</label>
                            <textarea className="form-control" id="details" placeholder="Решение или ответ"
                                      value={details} title={'Решение или ответ'} rows={7}
                                      onChange={(evt) => setDetails(evt.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary" title={'Создать и сохранить'}>
                            Создать элемент
                        </button>
                        <InertiaLink href={referer || `/items/${type}`} className='btn btn-secondary ml-2'
                                     title={'Вернуться к предыдущему экрану'}>
                            Назад
                        </InertiaLink>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
