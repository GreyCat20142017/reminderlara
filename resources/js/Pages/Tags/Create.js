import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';

import Layout from '@/Shared/Layout'

export default function Create({errors, referer}) {

    const [name, setName] = useState('');

    const createTag = event => {
        event.preventDefault();

        Inertia.post('/tags', {
            name,
            referer
        })
    };

    return (
        <Layout>
            <div className='container'>
                <h4>Создание тега</h4>
                <div className='col-md-6'>
                    {Object.keys(errors).length > 0 &&
                    <div className='alert alert-danger mt-4'>
                        {errors[Object.keys(errors)[0]][0]}
                    </div>
                    }

                    <form action='/tags' method='POST' className='my-5' onSubmit={createTag}>
                        <div className='form-group'>
                            <label htmlFor='name'>Тег</label>
                            <input type='text' className='form-control' id='name' placeholder='Тег' value={name}
                                   title={'Тег'}
                                   onChange={(evt) => setName(evt.target.value)}/>
                        </div>

                        <button type='submit' className='btn btn-primary' title={'Создать и сохранить'}>
                            Создать тег
                        </button>
                        <InertiaLink href={referer || '/tags'} className='btn btn-secondary ml-2'
                                     title={'Вернуться к предыдущему экрану'}>
                            Назад
                        </InertiaLink>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
