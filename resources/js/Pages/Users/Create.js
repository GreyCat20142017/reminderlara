import React, {useState, useEffect} from 'react'
import Layout from '@/Shared/Layout'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';

export default function Create(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const createUser = event => {
        event.preventDefault();
        Inertia.post('/users', {
            name,
            email,
            password,
            passwordRepeat
        })
            .then(() => {
            })
    };

    return (
        <Layout>
            <div className='container'>
                <div className='col-md-6'>
                    {Object.keys(props.errors).length > 0 &&
                    <div className='alert alert-danger mt-4'>
                        {props.errors[Object.keys(props.errors)[0]][0]}
                    </div>
                    }

                    <form action='/users' method='POST' className='my-5' onSubmit={createUser}>
                        <div className='form-group'>
                            <label htmlFor='name'>Имя</label>
                            <input type='text' className='form-control' id='name' placeholder='Имя'
                                   title={'Имя пользователя'}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' className='form-control' id='email' placeholder='Email'
                                   title={'Email'}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Пароль</label>
                            <input type='password' className='form-control' id='password' placeholder='Пароль'
                                   title={'Пароль'}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='passwordRepeat'>Повтор пароля</label>
                            <input type='password' className='form-control' id='passwordRepeat'
                                   placeholder='Повтор пароля'
                                   title={'Повтор пароля'}
                                   onChange={(e) => setPasswordRepeat(e.target.value)}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Создать пользователя</button>
                        <InertiaLink href='/users' className='btn btn-secondary ml-2'>Назад</InertiaLink>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
