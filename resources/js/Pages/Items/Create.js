import React, {useState} from 'react'
import Layout from '@/Shared/Layout'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';

export default function Create({errors}) {

    const [text, setText] = useState('');
    const [details, setDetails] = useState('');

    const createItem = event => {
        event.preventDefault();

        Inertia.post('/items', {
            text,
            details
        })
            .then(() => {
                // code
            })
    };

    return (
        <Layout>
            <div className="container">
                <h4>Создание тега</h4>
                <div className="col-md-6">
                    {Object.keys(errors).length > 0 &&
                    <div className="alert alert-danger mt-4">
                        {errors[Object.keys(errors)[0]][0]}
                    </div>
                    }

                    <form action="/tags" method="POST" className="my-5" onSubmit={createItem}>
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

                        <button type="submit" className="btn btn-primary" title={'Создать и сохранить'}>
                            Создать элемент
                        </button>
                        <InertiaLink href='/tags' className='btn btn-secondary ml-2'
                                     title={'Вернуться к предыдущему экрану'}>
                            Назад
                        </InertiaLink>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
